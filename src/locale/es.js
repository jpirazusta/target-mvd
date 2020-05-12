export default {
  COMMON: {
    title: 'TARGET MVD',
    loading: 'CARGANDO',
    somethingWentWrong: 'something went wrong',
    cancel: 'Cancelar',
  },

  SIGN_IN: {
    title: 'INICIAR SESIÓN',
    email: 'EMAIL',
    password: 'CONTRASEÑA',
    button: 'INICIAR SESIÓN',
  },

  MAIN_SCREEN: {
    title: 'Pagina Principal',
  },

  SIGN_UP: {
    title: 'REGISTRO',
    name: 'NOMBRE',
    email: 'EMAIL',
    password: 'CONTRASEÑA',
    passwordConfirmation: 'REPETIR CONTRASEÑA',
    passwordPlaceholder: 'MIN. 6 CARACTERES',
    gender: 'GÉNERO',
    button: 'REGISTRARSE',
  },

  GENDER: {
    placeholder: { label: 'ELIGE TU GÉNERO', value: '' },
    options: [
      { label: 'FEMENINO', value: 'female' },
      { label: 'MASCULINO', value: 'male' },
      { label: 'OTRO', value: 'other' },
    ],
  },

  FACEBOOK: {
    buttonTitle: 'CONECTAR CON FACEBOOK',
    loginError: 'Login falló con error:',
  },

  TARGET: {
    create: 'CREAR NUEVO TARGET',
    area: 'LARGO DEL ÁREA',
    areaEdit: 'LARGO DEL ÁREA',
    titleLabel: 'TÍTULO DEL TARGET',
    titlePlaceholder: 'Elige un título para tu target',
    topicLabel: 'SELECCIONA UN TEMA',
    topicLabelEdit: 'TEMA',
    topicPlaceholder: 'De qué quieres hablar?',
    emptyTopic: "Topic can't be blank",
    topicsError: 'No se pudieron obtener los temas del server',
    loadingTopics: 'Cargando temas',
    createButton: 'GUARDAR TARGET',
    saveButton: 'GUARDAR',
    deleteButton: 'ELIMINAR',
    deleteQuestion: 'Seguro/a que quieres eliminar este target?',
    deleteReminder: 'Recuerda que si lo haces, ya no podrás chatear con sus coincidencias',
    maximumTargetsError: 'No puedes crear más de 10 targets',
  },

  MATCH: {
    modalTitle: 'Yey!',
    message: 'Tienes una nueva coincidencia!',
    skip: 'Saltar',
    chatButton: 'Chatear!',
  },

  CHAT: {
    title: 'Chat',
    conversationsError: 'No se pudieron obtener las conversaciones del server',
  },

  PROFILE: {
    title: 'Perfil',
    usernameLabel: 'NOMBRE DE USUARIO',
    firstNameLabel: 'NOMBRE',
    lastNameLabel: 'APELLIDO',
    selectAvatar: 'Elegir Avatar',
    errorGet: 'No se pudieron obtener los datos del server',
    button: 'GUARDAR CAMBIOS',
    success: 'El perfil ha sido actualizado',
    logout: 'Cerrar sesión',
  },
};
