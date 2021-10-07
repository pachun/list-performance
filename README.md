# SectionList vs FlatList Performance

### Setup

Clone the repo and plug in a phone.

Install the dependencies with `yarn`.

Start the packager with `yarn start`.

Run the app on your device with `yarn ios --device`

Shake your phone to bring up the Expo developer menu.

Tap "Show Performance Monitor" to see the performance monitor.

Scroll the top FlatList (the green list) to view the JS framerate dip.

Scroll the bottom SectionList (the blue list) to view the JS framerate dip.

### Performance issue

On an iPhone 13 mini:

The lowest JS framerate that the FlatList will dip to while scrolling
as fast as possible is about 54, which is tolerable.

The lowest JS framerate that the SectionList will dip to while scrolling
as fast as possible is about 30, which is unacceptable.

—

The SectionList JS framerate dip gets much, much worse when the
SectionList has more involved contents than a single text label.

The SectionList JS framerate dip will go down into single digits when
the contents include several ~4 text labels; even when section headers
aren’t rendered (by omitting the `renderSectionHeader` prop from the
SectionList component).
