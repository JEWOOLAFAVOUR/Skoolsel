import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES, icons, images, FONTS} from '../../../constants';
import FormButton from '../../../components/Button/FormButton';
import {useNavigation} from '@react-navigation/native';
import HeaderA from '../../../components/Header/HeaderA';
import {launchCamera} from 'react-native-image-picker';

const UploadProfilePic = () => {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);
  console.log('selected image', selectedImage);

  const handleNext = () => {
    launchCamera(
      {
        mediaType: 'photo',
        cameraType: 'front',
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const source = {uri: response.uri};
          setSelectedImage(source);
          navigation.navigate('RegistrationDone');
        }
      },
    );
  };

  return (
    <View style={styles.page}>
      <View style={{flex: 1}}>
        <HeaderA />
        <Text
          style={{
            ...FONTS.h1,
            color: COLORS.black,
            fontFamily: 'Quicksand-Bold',
            marginRight: SIZES.h1 * 3,
          }}>
          Thank you, now time for a photo of you
        </Text>
        <View style={{marginTop: SIZES.h4}}>
          {/* ONE */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: SIZES.h5,
            }}>
            <Image
              source={icons.check}
              style={{height: SIZES.h3, width: SIZES.h3}}
            />
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.black,
                marginLeft: SIZES.h5,
              }}>
              The photo will be stored securely.
            </Text>
          </View>
          {/* TWO */}
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Image
              source={icons.check}
              style={{height: SIZES.h3, width: SIZES.h3}}
            />
            <Text
              style={{
                fontSize: SIZES.body4,
                color: COLORS.black,
                marginLeft: SIZES.h5,
                marginRight: SIZES.h1 * 3,
                fontFamily: 'OpenSans-Regular',
              }}>
              We will only use your photo to open your account.
            </Text>
          </View>
        </View>
      </View>
      <FormButton title="Get started" onPress={() => handleNext()} />
    </View>
  );
};

export default UploadProfilePic;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.width * 0.05,
    paddingTop: SIZES.h5,
    paddingBottom: SIZES.h1,
  },
});
