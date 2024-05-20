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
import menu from '@assets/icons/menu.svg?raw';
import close from '@assets/icons/close.svg?raw';
import externallink from '@assets/icons/external-link.svg?raw';
import instagram from '@assets/icons/instagram.svg?raw';
import x from '@assets/icons/x.svg?raw';
import github from '@assets/icons/github.svg?raw';
import mail from '@assets/icons/mail.svg?raw';

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
    menu,
    close,
    externallink,
    instagram,
    x,
    github,
    mail,
}

export type iconPathsType = keyof typeof iconPaths;
