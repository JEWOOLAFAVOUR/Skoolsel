import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES, FONTS, icons} from '../../../constants';
import HeaderA from '../../../components/Header/HeaderA';
import {useNavigation} from '@react-navigation/native';
import {launchCamera} from 'react-native-image-picker';

const VerificationType = () => {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);
  console.log('selected image', selectedImage);
  const verificationData = [
    {
      id: 1,
      title: 'International Passport',
    },
    {
      id: 2,
      title: 'Driving Licence',
    },
    {
      id: 3,
      title: 'Student ID',
    },
    {
      id: 4,
      title: 'NIN',
    },
  ];

  const handleNext = () => {
    launchCamera(
      {
        mediaType: 'photo',
        cameraType: 'back',
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
          navigation.navigate('UploadProfilePic');
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
            marginTop: SIZES.h5,
          }}>
          Photo of your ID
        </Text>
        <Text
          style={{...FONTS.body3, color: COLORS.black, marginTop: SIZES.h5}}>
          Choose which type of documents you're going to use.
        </Text>
        <View style={{marginTop: SIZES.h1}}>
          <FlatList
            data={verificationData}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => handleNext()}
                  style={styles.container}>
                  <Text style={{...FONTS.body3, color: COLORS.black}}>
                    {item.title}
                  </Text>
                  <Image
                    source={icons.arrowright}
                    style={{height: SIZES.h5, width: SIZES.h4}}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
      {/* MESSAGE */}
      <View style={styles.secureCtn}>
        <Image
          source={icons.lock}
          style={{
            height: SIZES.h2 * 1.2,
            width: SIZES.h2 * 1.2,
            marginRight: SIZES.h5,
          }}
        />
        <Text style={{...FONTS.body3a, color: COLORS.black}}>
          Your ID photo will be stored securely.
        </Text>
      </View>
    </View>
  );
};

export default VerificationType;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.width * 0.04,
    paddingTop: SIZES.h5,
    paddingBottom: SIZES.h1,
  },
  container: {
    height: SIZES.h1 * 2,
    backgroundColor: COLORS.offwhite,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.h5,
    marginBottom: SIZES.h4,
    borderRadius: SIZES.base,
  },
  secureCtn: {
    height: SIZES.h1 * 1.7,
    backgroundColor: '#F9EDDE',
    borderRadius: SIZES.h1 * 1.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SIZES.h5,
  },
});
