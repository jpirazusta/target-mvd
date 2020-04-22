export default {
  SIGN_IN: {
    title: 'INICIAR SESIÓN',
    email: 'EMAIL',
    password: 'CONTRASEÑA',
    button: 'INICIAR SESIÓN',
  },

  MAIN_SCREEN: {
    logout: 'CERRAR SESIÓN',
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
    areaPlaceholder: '0 m',
    titleLabel: 'TÍTULO DEL TARGET',
    titlePlaceholder: 'Elige un título para tu target',
    topicLabel: 'SELECCIONA UN TEMA',
    topicPlaceholder: 'De qué quieres hablar?',
    emptyTopic: "Topic can't be blank",
    topicsError: 'No se pudo obtener los temas del server',
    loadingTopics: 'Cargando temas',
    buttonTitle: 'GUARDAR TARGET',
  },
};
