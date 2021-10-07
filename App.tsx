import React from "react"
import { FlatList, SectionList, Text, View } from "react-native"

const listSize = 10_000
const listItems: string[] = Array.from(
  Array(listSize).keys(),
).map((key: number) => key.toString())

const alwaysMemoize = () => true
const ListItem = React.memo(
  ({ title }: { title: string }) => (
    <View style={{ height: 80 }}>
      <Text style={{ width: "100%", textAlign: "center" }}>{title}</Text>
    </View>
  ),
  alwaysMemoize,
)

const flatListColor = "green"
const flatListItems = listItems

const sectionListColor = "blue"
const sectionListItems = listItems.map(listItem => ({
  title: listItem,
  data: [listItem],
}))

const approximateStatusBarHeight = 40

const App = () => {
  const renderItem = React.useCallback(
    ({ item }: { item: string }) => <ListItem title={item} />,
    [],
  )
  const renderSectionHeader = React.useCallback(
    ({ section: { title } }: { section: { title: string } }) => (
      <ListItem title={title + " section header"} />
    ),
    [],
  )

  return (
    <View style={{ flex: 1, paddingTop: approximateStatusBarHeight }}>
      <FlatList
        style={{ flex: 1, backgroundColor: flatListColor }}
        data={flatListItems}
        renderItem={renderItem}
        keyExtractor={item => item}
      />
      <SectionList
        style={{ flex: 1, backgroundColor: sectionListColor }}
        sections={sectionListItems}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={item => item}
      />
    </View>
  )
}

export default App
