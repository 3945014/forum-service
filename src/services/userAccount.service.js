import * as userAccountRepository from '../repositories/userAccount.repository.js';
import {deleteRole} from "../controllers/userAccount.controller.js";
import {findUser} from "../repositories/userAccount.repository.js";

export const register = async (user) => {
    try {
        return await userAccountRepository.addUser(user);
    } catch (e) {
        console.log(e);
        throw new Error('User already exists');
    }
}

export const removeUser = async (login) => {
    const userAccount = await userAccountRepository.removeUser(login);
    if(!userAccount) {
        throw new Error(`User with login ${login} not found`);
    }
    return userAccount;
}

export const updateUser = async (login, updateData) => {
    const userAccount = await userAccountRepository.updateUser(login, updateData);
    if(!userAccount) {
        throw new Error(`User with login ${login} not found`);
    }
    return userAccount;
}

export const changeRoles = async (login, role, isAddRole) => {
    if (isAddRole) {
        const userAccount = await userAccountRepository.addRole(login, role);
        if(!userAccount) {
            throw new Error(`User with login ${login} not found`);
        }
        return userAccount;
    } else {
        const userAccount = await userAccountRepository.deleteRole(login, role);
        if(!userAccount) {
            throw new Error(`User with login ${login} not found`);
        }
        return userAccount;
    }
}

export const changePassword = async (login, newPassword) => await userAccountRepository.changePassword(login, newPassword);

export const getUser = async (login) => {
    const userAccount = await userAccountRepository.findUser(login);
    if(!userAccount) {
        throw new Error(`User with login ${login} not found`);
    }
    return userAccount;
}