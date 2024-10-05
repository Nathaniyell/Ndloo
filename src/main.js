import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faLocation, faPhone, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';

/* add icons to the library */
library.add(faUserSecret, faTwitter, faInstagram, faFacebook, faYoutube, faPhone, faLocation, faMessage)

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router);

app.mount('#app');
