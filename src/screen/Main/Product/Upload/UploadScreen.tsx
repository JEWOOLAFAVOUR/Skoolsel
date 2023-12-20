import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES, FONTS, images, icons} from '../../../../constants';
import HeaderA from '../../../../components/Header/HeaderA';
import FormButton from '../../../../components/Button/FormButton';
import ImagePicker from 'react-native-image-crop-picker';

const UploadScreen = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  console.log('selected images', selectedImages);

  // function
  const openPicker = async () => {
    try {
      const pickerOptions = {
        multiple: true,
        width: 400,
        height: 400,
        cropping: true,
        mediaType: 'photo',
      };

      const images = await ImagePicker.openPicker(pickerOptions);

      // Display selected images in the UI
      setSelectedImages(images);
    } catch (error) {
      console.error('Error picking images:', error);
      // Handle the error appropriately
    }
  };

  const removeImage = index => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  return (
    <View style={styles.page}>
      <View style={{flex: 1}}>
        <HeaderA title="Add product" />
        {/* FIRST */}
        {selectedImages.length < 1 && (
          <View>
            <Text
              style={{
                ...FONTS.h1,
                fontSize: SIZES.h1 * 1.2,
                color: COLORS.black,
                fontFamily: 'OpenSans-Medium',
                marginTop: SIZES.h1,
              }}>
              Let's start
            </Text>
            <Text
              style={{
                ...FONTS.h1,
                fontSize: SIZES.h1 * 1.2,
                color: COLORS.black,
                fontFamily: 'OpenSans-Medium',
                marginRight: SIZES.h1,
              }}>
              by adding photos of your product
            </Text>
            <TouchableOpacity
              onPress={() => openPicker()}
              style={styles.uploadCtn}>
              <Image
                source={icons.camera}
                style={{
                  height: SIZES.h1 * 1.2,
                  width: SIZES.h1 * 1.42,
                  marginBottom: SIZES.h5,
                }}
              />
              <Text
                style={{
                  ...FONTS.body3a,
                  color: COLORS.primary,
                  fontFamily: 'OpenSans-Medium',
                }}>
                Upload photo
              </Text>
            </TouchableOpacity>
          </View>
        )}
        {/* SECOND */}
        {/* FOR  TESTINGS  */}
        <View style={{marginTop: SIZES.base}}>
          <FlatList
            data={selectedImages}
            numColumns={2}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            renderItem={({item, index}) => {
              return (
                <View key={index} style={{marginBottom: SIZES.base}}>
                  <Image
                    source={{uri: item.path}}
                    style={{
                      width: SIZES.width * 0.44,
                      height: SIZES.height * 0.24,
                      borderRadius: SIZES.base,
                    }}
                  />
                  <TouchableOpacity
                    onPress={() => removeImage(index)}
                    style={styles.closeCtn}>
                    <Image
                      source={icons.close}
                      style={{
                        height: SIZES.h5,
                        width: SIZES.h5,
                        borderRadius: 100,
                        tintColor: COLORS.white,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </View>

      {/* END BUTTON */}
      <FormButton title="Next" btnStyle={{backgroundColor: '#BDCDD6'}} />
    </View>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.width * 0.05,
    paddingTop: SIZES.h5,
    paddingBottom: SIZES.h5,
  },
  uploadCtn: {
    height: SIZES.height * 0.23,
    borderWidth: 1.3,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.cream,
    borderRadius: SIZES.base,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.h1 * 1.7,
  },
  closeCtn: {
    height: SIZES.h1,
    width: SIZES.h1,
    backgroundColor: COLORS.black,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: SIZES.base,
    right: SIZES.base,
  },
});
