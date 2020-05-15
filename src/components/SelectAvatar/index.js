import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { func, string } from 'prop-types';
import ImagePicker from 'react-native-image-picker';

import CustomButton from 'components/common/CustomButton';
import Avatar from 'components/common/Avatar';
import profileCircles from 'assets/images/profileCircles.png';
import strings from 'locale';
import { BLACK } from 'constants/colors';
import styles from './styles';

const {
  PROFILE: { selectAvatar },
} = strings;

const options = {
  title: selectAvatar,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const SelectAvatar = ({ avatarUrl, setAvatarData }) => {
  const [avatarSource, setAvatarSource] = useState('');

  const onSelect = () =>
    ImagePicker.showImagePicker(options, response => {
      if (!response.didCancel && !response.error) {
        const { uri } = response;
        const data = `data:image/jpeg;base64,${response.data}`;

        setAvatarSource(uri);
        setAvatarData(data);
      }
    });

  return (
    <>
      <View style={styles.container}>
        <Image source={profileCircles} />
        <Avatar uri={avatarSource || avatarUrl} style={styles.profileImage} />
      </View>
      <CustomButton
        handleOnPress={onSelect}
        title={selectAvatar}
        titleColor={BLACK}
        additionalStyles={styles.margin}
      />
    </>
  );
};

SelectAvatar.propTypes = {
  setAvatarData: func.isRequired,
  avatarUrl: string,
};

export default SelectAvatar;
