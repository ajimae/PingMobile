/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
/* eslint-disable prettier/prettier */
// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   Animated,
//   Image,
//   Platform,
//   ListView,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;

import React, { Component } from 'react';
import {
  Animated,
  ImageBackground,
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  SafeAreaView,
  // ListView,
  Dimensions,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';

// import ListView from 'deprecated-react-native-listview';
import { WebView } from 'react-native-webview';

import { assets, icons } from './src/assets';
import { isX } from './src/utils/is-iphone-x';
import { html } from './fixtures';

const NAVBAR_HEIGHT = isX() ? 80 : 64;
const STATUS_BAR_HEIGHT = Platform.select({
  ios: isX() ? 40 : 20,
  android: 24,
});

const TAB_HEIGHT = isX() ? 80 : 40;

// const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
// const AnimatedWebView = Animated.createAnimatedComponent(WebView);

export default class App extends Component {
  constructor(props) {
    super(props);

    // const dataSource = new FlatList.DataSource({
    //   rowHasChanged: (r1, r2) => r1 !== r2,
    // });

    // const scrollAnim = new Animated.Value(0);
    // const offsetAnim = new Animated.Value(0);

    this.state = {
      // dataSource: dataSource.cloneWithRows(data),
      // scrollAnim,
      // offsetAnim,
      inputValue: '',
      showNavBar: true,
      showInput: false,
      scrollValue: -1,
      title: '',
      canGoBack: false,
      canGoForward: false,
    };
    this.webview_ref = React.createRef();
    this.tabHeight = new Animated.Value(0);
    this.navHeight = new Animated.Value(0);
  }

  // _clampedScrollValue = 0;
  // _offsetValue = 0;
  // _scrollValue = 0;

  componentDidMount() {
    //   this.state.scrollAnim.addListener(({ value }) => {
    //     const diff = value - this._scrollValue;
    //     this._scrollValue = value;
    //     this._clampedScrollValue = Math.min(
    //       Math.max(this._clampedScrollValue + diff, 0),
    //       NAVBAR_HEIGHT - STATUS_BAR_HEIGHT,
    //     );
    //   });
    //   this.state.offsetAnim.addListener(({ value }) => {
    //     this._offsetValue = value;
    //   });
    this.setState({
      scrollValue: STATUS_BAR_HEIGHT,
    });
  }

  // componentWillUnmount() {
  //   this.state.scrollAnim.removeAllListeners();
  //   this.state.offsetAnim.removeAllListeners();
  // }

  // _onScrollEndDrag = () => {
  //   this._scrollEndTimer = setTimeout(this._onMomentumScrollEnd, 250);
  // };

  // _onMomentumScrollBegin = () => {
  //   clearTimeout(this._scrollEndTimer);
  // };

  // _onMomentumScrollEnd = () => {
  //   const toValue =
  //     this._scrollValue > NAVBAR_HEIGHT &&
  //     this._clampedScrollValue > (NAVBAR_HEIGHT - STATUS_BAR_HEIGHT) / 2
  //       ? this._offsetValue + NAVBAR_HEIGHT
  //       : this._offsetValue - NAVBAR_HEIGHT;

  //   Animated.timing(this.state.offsetAnim, {
  //     toValue,
  //     duration: 350,
  //     useNativeDriver: true,
  //   }).start();
  // };

  // _renderRow = (rowData, sectionId, rowId) => {
  //   return (
  //     <ImageBackground
  //       key={rowId}
  //       style={styles.row}
  //       source={{ uri: rowData.image }}
  //       resizeMode="cover">
  //       <Text style={styles.rowText}>{rowData.title}</Text>
  //     </ImageBackground>
  //   );
  //   : (
  //     <WebView
  //       scrollEnabled={false}
  //       source={{ uri: rowData.url }}
  //       key={rowId}
  //       style={styles.row}
  //       resizeMode="cover"
  //     />
  //   );
  // };

  _handleChange = event => {
    this.setState({
      inputValue: event,
    });
  };

  _showInput = () => {
    this.setState({
      showInput: true,
    });
  };

  _hideInput = () => {
    this.setState({
      showInput: false,
    });
  };

  _onScroll = dist => {
    // const { scrollValue } = this.state;
    let toValue = TAB_HEIGHT;
    let _toValue = -NAVBAR_HEIGHT;
    if(dist < 0 || dist === STATUS_BAR_HEIGHT) {
      toValue = 0;
      _toValue = 0;
    }
    
    Animated.spring(
      this.tabHeight,
      {
        toValue,
        velocity: 2,
        tension: 2,
        friction: 8,
      }
    ).start();

    Animated.spring(
      this.navHeight,
      {
        toValue: _toValue,
        velocity: 2,
        tension: 2,
        friction: 8,
      }
    ).start();
    this.setState({
      scrollValue: dist,
    });
  };

  _handleAction = key => {
    switch (key) {
      case 'key-0': {
        this._handleBackAction();
        break;
      }
      case 'key-1': {
        this._handleForwardAction();
        break;
      }
      case 'key-2': {
        break;
      }
      case 'key-3': {
        break;
      }
      case 'key-4': {
        break;
      }
      default: {
        // TODO: handle no matching case here
      }
    }
  };

  _handleForwardAction = () => {
    const { canGoForward } = this.state;
    if (canGoForward) {
      return this.webview_ref.current.goForward();
    }
    return false;
  }

  _handleBackAction = () => {
    const { canGoBack } = this.state;
    if (canGoBack) {
      return this.webview_ref.current.goBack();
    }
    return false;
  }

  _onNavigationStateChange = ({canGoBack, canGoForward, title}) => {
    this.setState({
      title,
      canGoBack,
      canGoForward,
      scrollValue: -1,
    });
  }

  render() {
    // const { clampedScroll } = this.state;

    // const navbarTranslate = clampedScroll.interpolate({
    //   inputRange: [0, NAVBAR_HEIGHT - STATUS_BAR_HEIGHT],
    //   outputRange: [0, -(NAVBAR_HEIGHT - STATUS_BAR_HEIGHT)],
    //   extrapolate: 'clamp',
    // });
    // const navbarOpacity = clampedScroll.interpolate({
    //   inputRange: [0, NAVBAR_HEIGHT - STATUS_BAR_HEIGHT],
    //   outputRange: [1, 0],
    //   extrapolate: 'clamp',
    // });

    // const runFirst = `
    //   document.body.style.backgroundColor = 'red';
    //   setTimeout(function() { window.alert('hi') }, 2000);
    //   true; // note: this is required, or you'll sometimes get silent failures
    // `;
    // const run = `
    //   document.body.style.backgroundColor = 'blue';
    //   true;
    // `;
    // setTimeout(() => {
    //   this._bridge.injectJavaScript(run);
    // }, 3000);

    const run = `(function() {
      var callback=function(direction) {
          window.ReactNativeWebView.postMessage(direction)}; // here you can also use json string
          var initTop=document.body.scrollTop;
          window.addEventListener('scroll', function() {
              var currTop = document.body.scrollTop;
              var dist = currTop-initTop;
              if(dist === 0)
                  return;
              callback(dist);
              initTop = currTop;
          }, false)
      })(window)`;

    const { scrollValue, canGoBack, canGoForward } = this.state;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.fill}>
          {/* <AnimatedFlatList
            contentContainerStyle={styles.contentContainer}
            data={data}
            renderItem={({ item }) => this._renderRow(item)}
            scrollEventThrottle={1}
            keyExtractor={(item, index) => item.id || index.toString()}
            // onMomentumScrollBegin={this._onMomentumScrollBegin}
            // onMomentumScrollEnd={this._onMomentumScrollEnd}
            // onScrollEndDrag={this._onScrollEndDrag}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: { contentOffset: { y: this.state.scrollAnim } },
                },
              ],
              { useNativeDriver: true },
            )}
          /> */}
          {/* <AnimatedWebView
            source={{ uri: 'https://google.com' }}
            contentContainerStyle={styles.contentContainer}
            scrollEventThrottle={1}
            onMomentumScrollBegin={this._onMomentumScrollBegin}
            onMomentumScrollEnd={this._onMomentumScrollEnd}
            onScrollEndDrag={this._onScrollEndDrag}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: { contentOffset: { y: this.state.scrollAnim } },
                },
              ],
              { useNativeDriver: true },
            )}
          /> */}
          <WebView
            style={{
              // TDOD: animate this to conform with the statusbar/navbar animation
              marginTop: scrollValue < 0 ? NAVBAR_HEIGHT : STATUS_BAR_HEIGHT,
            }}
            bounces={false}
            javaScriptEnabled={true}
            ref={b => (this._bridge = b)}
            // source={{ html }}
            source={{ uri: 'https://google.com' }}
            injectedJavaScript={run}
            onMessage={event => {
              this._onScroll(event.nativeEvent.data);
            }}
            ref={this.webview_ref}
            onNavigationStateChange={this._onNavigationStateChange}
          />
            <Animated.View
              style={[styles.navbar, { transform: [{ translateY: this.navHeight }] }]}>
              <View style={[styles.title, { opacity: 1 }]}>
                <View style={styles.textInput}>
                  <TextInput
                    onChangeText={this._handleChange}
                    value={this.state.inputValue}
                    autoCorrect={false}
                    autoCapitalize="none"
                    onBlur={this._hideInput}
                    style={{
                      fontSize: 15,
                      color: '#42414f',
                    }}
                    placeholder="Search or enter address"
                  />
                </View>
              </View>
            </Animated.View>
            <Animated.View
              style={[styles.tabBar, {transform: [{translateY: this.tabHeight}]}]}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '88%',
                }}>
                {icons.map((icon, index) => {
                  icon = (index == 1 && !canGoForward) ? assets["next-off"] : icon;
                  const _icon = (index == 0 && !canGoBack) ? assets["back-off"] : icon;
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => this._handleAction('key-' + index)}
                      onLongPress={null}>
                      <Image source={_icon || icon} style={styles.icons} />
                    </TouchableOpacity>)
                })}
              </View>
            </Animated.View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  navbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    borderBottomColor: '#dedede',
    borderBottomWidth: 1,
    height: NAVBAR_HEIGHT,
    justifyContent: 'center',
    paddingTop: STATUS_BAR_HEIGHT - 10,
  },
  contentContainer: {
    paddingTop: NAVBAR_HEIGHT,
  },
  title: {
    color: '#333333',
  },
  rowText: {
    color: 'white',
    fontSize: 18,
  },
  icons: {
    height: isX() ? 20 : 18,
    width: isX() ? 20 : 18,
  },
  textInput: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderColor: '#e6e6e6',
    borderWidth: 0.5,
    width: Dimensions.get('screen').width - 15,
  },
  tabBar: {
    position: 'absolute',
    top: Dimensions.get('screen').height - TAB_HEIGHT,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    height: isX() ? 80 : 40,
    justifyContent: 'center',
    borderTopWidth: 0.5,
    borderTopColor: '#e4e4e4',
    paddingBottom: isX() ? 30 : 0,
  },
});
