import React, { useState } from 'react';
import { Image } from 'react-native';
import { func } from 'prop-types';
import ImagePicker from 'react-native-image-picker';

import Button from 'components/common/Button';
import defaultProfileImage from 'assets/images/defaultProfileImage.png';
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

const SelectAvatar = ({ setAvatarData }) => {
  const [avatarSource, setAvatarSource] = useState('');

  const onSelect = () =>
    ImagePicker.showImagePicker(options, response => {
      if (response.data) {
        const source = { uri: response.uri };
        const data = { uri: `data:image/jpeg;base64,${response.data}` };

        setAvatarSource(source);
        setAvatarData(data);
      }
    });

  return (
    <>
      <Image source={avatarSource || defaultProfileImage} style={styles.image} />
      <Button handleOnPress={onSelect} title={selectAvatar} titleColor={BLACK} />
    </>
  );
};

SelectAvatar.propTypes = {
  setAvatarData: func.isRequired,
};

export default SelectAvatar;
