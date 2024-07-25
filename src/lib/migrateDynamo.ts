import { init } from './actions/init';
import { create } from './actions/create';
import { up } from './actions/up';
import { status } from './actions/status';
import { down } from './actions/down';

export const initAction = async () => {
    return init();
};

export const createAction = async (description: string) => {
    return create(description);
};

export const upAction = async (profile: string, env: string) => {
    return up(profile, env);
};

export const downAction = async (profile: string, downShift: number, env: string) => {
    return down(profile, downShift, env);
};

export const statusAction = async (profile: string, env: string) => {
    return status(profile, env);
};
