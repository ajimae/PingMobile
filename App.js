import React, { Component } from 'react';
import {
  Animated,
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  StatusBar,
  ActionSheetIOS,
  TouchableOpacity,
} from 'react-native';

import { WebView } from 'react-native-webview';

import { assets, icons } from './src/assets';
import { isX } from './src/utils/is-iphone-x';
import { images } from './fixtures';

const NAVBAR_HEIGHT = isX() ? 100 : 64;
const STATUS_BAR_HEIGHT = Platform.select({
  ios: isX() ? 60 : 20,
  android: 24,
});

const TAB_HEIGHT = isX() ? 80 : 40;
const URL = 'http://127.0.0.1:5500/index.html';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      showNavBar: true,
      fixNavBar: false,
      scrollValue: -1,
      title: '',
      uri: '',
      isError: false,
      homeImageObject: {},
      webViewKey: 1,
      canGoBack: false,
      canGoForward: false,
    };
    this.webview_ref = React.createRef();
    this.tabHeight = new Animated.Value(0);
    this.navHeight = new Animated.Value(0);
  }

  componentDidMount() {
    this.setState({
      uri: URL,
      scrollValue: STATUS_BAR_HEIGHT,
    });
  }

  _handleChange = event => {
    this.setState({
      inputValue: event,
    });
  };

  _showInput = () => {
    this.setState({
      fixNavBar: true,
    });
  };

  _hideInput = () => {
    this.setState({
      fixNavBar: false,
    });
  };

  _onScroll = dist => {
    const { fixNavBar } = this.state;
    let toValue = TAB_HEIGHT;
    let _toValue = -NAVBAR_HEIGHT;
    if (dist < 0 || dist === STATUS_BAR_HEIGHT) {
      toValue = 0;
      _toValue = 0;
    }

    Animated.spring(this.tabHeight, {
      toValue,
      velocity: 2,
      friction: 8,
    }).start();

    !fixNavBar &&
      Animated.spring(this.navHeight, {
        toValue: _toValue,
        velocity: 2,
        friction: 8,
      }).start();
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
  };

  _handleBackAction = () => {
    const { canGoBack } = this.state;
    if (canGoBack)
      return this.webview_ref.current.goBack();
    return false;
  };

  _onNavigationStateChange = ({ canGoBack, canGoForward, title, url: uri }) => {
    const homeImageObject = images[title] || '';
    this.setState({
      uri,
      title,
      canGoBack,
      canGoForward,
      homeImageObject,
      scrollValue: -1,
    });
  };

  _handleGo = () => {
    const { inputValue } = this.state;
    if (inputValue.trim() == '') return;
    let uri = '';
    let truncatedValue = '';
    const protocol = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
    const url = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;

    if (inputValue.match(new RegExp(url))) {
      if (inputValue.match(new RegExp(protocol))) {
        uri = inputValue;
        const regex = /[\/?]/gi;
        truncatedValue = uri.split(regex)[2];
      } else {
        uri = `http://${inputValue}`;
        const regex = /[\/?]/gi;
        truncatedValue = uri.split(regex)[2];
      }
    } else {
      // TODO: add other search engines here
      uri = `https://www.google.com/search?q=${inputValue}`;
      const regex = /[\/?]/gi;
      truncatedValue = uri.split(regex)[2];
    }
    this.setState({ uri, inputValue: truncatedValue });
  };

  _visitPhotoArtist = props => {
    const { link, author: title } = props;
    return ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Close', `View on ${'device'}`],
        destructiveButtonIndex: 2,
        cancelButtonIndex: 0,
        title,
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          this.setState({
            uri: link,
          });
          // this._onNavigationStateChange({canGoBack: true});
        }
      },
    );
  };

  _handleError = error => {
    this.setState({
      isError: true
    });
  }

  _renderArtistButton = props => {
    const { homeImageObject } = this.state;
    if (!homeImageObject.author) return;
    return (
      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          borderWidth: 1,
          top: isX() ? 675 : 490,
        }}
        onPress={() => this._visitPhotoArtist(homeImageObject)}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            position: 'absolute',
            top: 100,
            marginLeft: 20,
            paddingHorizontal: 10,
            height: 22,
            borderRadius: 5,
            backgroundColor: 'rgba(70, 70, 70, 0.60)',
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 12,
            }}>
            Photo by {homeImageObject.author}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const run = `(function() {
      var callback=function(direction) {
        window.ReactNativeWebView.postMessage(direction)}; // here you can also use json string
        var initTop=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        window.addEventListener('scroll', function() {
          var currTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
          var dist = currTop-initTop;
          if(dist === 0)
              return;
          callback(dist);
          initTop = currTop;
        }, true)
    })(window)`;
    
    const {
      scrollValue,
      canGoBack,
      canGoForward,
      uri,
      isError,
      inputValue,
      webViewKey,
    } = this.state;

    return (
      <>
        <StatusBar color="#000" animated={true} barStyle="dark-content" />
        <View style={styles.fill}>
          <WebView
            style={{
              // TDOD: animate this to conform with the statusbar/navbar animation
              marginTop: scrollValue < 0 ? NAVBAR_HEIGHT : STATUS_BAR_HEIGHT,
            }}
            key={webViewKey}
            bounces={false}
            javaScriptEnabled={true}
            ref={b => (this._bridge = b)}
            source={ uri ? { uri } : { URL }}
            injectedJavaScript={run}
            onMessage={event => {
              this._onScroll(event.nativeEvent.data);
            }}
            onError={this._handleError}
            ref={this.webview_ref}
            originWhitelist={['*']}
            onNavigationStateChange={this._onNavigationStateChange}
          />
          <Animated.View
            style={[
              styles.navbar,
              { transform: [{ translateY: this.navHeight }] },
            ]}>
            <View style={[styles.title, { opacity: 1 }]}>
              <View style={styles.textInput}>
                <TextInput
                  onFocus={this._showInput}
                  onChangeText={this._handleChange}
                  value={inputValue}
                  autoCorrect={false}
                  autoCapitalize="none"
                  returnKeyType="go"
                  selectTextOnFocus={true}
                  onBlur={this._hideInput}
                  onSubmitEditing={this._handleGo}
                  // inputAccessoryViewID={'inputAccessoryViewID'}
                  style={{
                    fontSize: 15,
                    color: '#42414f',
                  }}
                  placeholder="Search or enter address"
                />
              </View>
            </View>
          </Animated.View>
          {!canGoBack && !isError ? this._renderArtistButton() : null}
          <Animated.View
            style={[
              styles.tabBar,
              { transform: [{ translateY: this.tabHeight }] },
            ]}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '88%',
              }}>
              {icons.map((icon, index) => {
                icon = index == 1 && !canGoForward ? assets['next-off'] : icon;
                const _icon =
                  index == 0 && !canGoBack // && !didUrlChange
                    ? assets['back-off']
                    : icon;
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => this._handleAction('key-' + index)}
                    onLongPress={null}>
                    <Image source={_icon || icon} style={styles.icons} />
                  </TouchableOpacity>
                );
              })}
            </View>
          </Animated.View>
          {/* <InputAccessoryView
              nativeID={'inputAccessoryViewID'}
              backgroundColor='#f4f4f4'
              style={{
                borderWidth: 3
              }}
            >
              <View style={{
                display: 'flex',
                flexDirection: 'row',
                paddingRight: 15,
                color: "#ccc",
                justifyContent: 'flex-end',
              }}>
                <Button
                  onPress={this._hideInput}
                  title="Done"
                  style={{
                    color: "#ccc",
                    fontSize: 3,
                    flexShrink: 1,
                  }}
                />
              </View>
            </InputAccessoryView> */}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: 'rgba(236, 236, 236, 0.90)',
  },
  navbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: 'rgba(224, 224, 224, 1.0)',
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
    height: isX() ? 22 : 20,
    width: isX() ? 22 : 20,
  },
  textInput: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderColor: '#e6e6e6',
    borderWidth: 0.5,
    marginTop: isX() ? 0 : 10,
    width: Dimensions.get('screen').width - 15,
  },
  tabBar: {
    position: 'absolute',
    top: Dimensions.get('screen').height - TAB_HEIGHT,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: 'rgba(224, 224, 224, 1.0)', // change the to about 0.90 for translucent tabBar
    height: isX() ? 80 : 40,
    justifyContent: 'center',
    borderTopWidth: 0.5,
    borderTopColor: '#e4e4e4',
    paddingBottom: isX() ? 30 : 0,
  },
});
