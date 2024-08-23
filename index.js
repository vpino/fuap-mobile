/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { FuapMobileApp } from './src/FuapMobileApp';
import './gesture-handler';

AppRegistry.registerComponent(appName, () => FuapMobileApp);
