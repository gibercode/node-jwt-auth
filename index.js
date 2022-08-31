'use strict';

import server from './src/config/express'
import mongoonseInit from './src/config/mongoose'

server();
mongoonseInit();
