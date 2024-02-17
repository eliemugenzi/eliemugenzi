import javascript from '@assets/icons/javascript.svg?raw';
import node from '@assets/icons/node.svg?raw';
import go from '@assets/icons/go.svg?raw';
import typescript from '@assets/icons/typescript.svg?raw';
import holder from '@assets/icons/icon-default.svg?raw';
import reactNative from '@assets/icons/react-native.svg?raw';
import docker from '@assets/icons/docker.svg?raw';
import python from "@assets/icons/python.svg?raw";
import react from '@assets/icons/react.svg?raw';
import vue from '@assets/icons/vue.svg?raw';
import redis from '@assets/icons/redis.svg?raw';
import postgres from '@assets/icons/postgres.svg?raw';
import mysql from '@assets/icons/mysql.svg?raw';
import circlecli from '@assets/icons/circle-cli.svg?raw';
import vitest from '@assets/icons/vitest.svg?raw';
import jest from '@assets/icons/jest.svg?raw';
import cypress from '@assets/icons/cypress.svg?raw';

export const iconPaths = {
    javascript,
    node,
    go,
    typescript,
    default: holder,
    "react-native": reactNative,
    docker,
    python,
    react,
    vue,
    redis,
    postgres,
    mysql,
    "circle-cli": circlecli,
    vitest,
    jest,
    cypress,
}

export type iconPathsType = keyof typeof iconPaths;
