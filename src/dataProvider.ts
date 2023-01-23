import { DataProvider } from "@pankod/refine-core";
import { notification } from "@pankod/refine-antd";
import nookies from "nookies";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase";

export const dataProvider: any = {
  create: ({ resource, variables, metaData }: any) => {
    return Promise.resolve();
    // return Promise.reject();
  },
  createMany: ({ resource, variables, metaData }: any) => {
    return Promise.resolve();
    // return Promise.reject();
  },
  deleteOne: ({ resource, id, variables, metaData }: any) => {
    return Promise.resolve();
    // return Promise.reject();
  },
  deleteMany: ({ resource, ids, variables, metaData }: any) => {
    return Promise.resolve();
    // return Promise.reject();
  },
  getList: ({
    resource,
    pagination,
    hasPagination,
    sort,
    filters,
    metaData,
  }: any) => {
    console.log(resource,
      pagination,
      hasPagination,
      sort,
      filters,
      metaData)
    return Promise.resolve();
    // return Promise.reject();
  },
  getMany: ({ resource, ids, metaData }: any) => {
    return Promise.resolve();
    // return Promise.reject();
  },
  getOne: ({ resource, id, metaData }: any) => {
    return Promise.resolve();
    // return Promise.reject();
  },
  update: ({ resource, id, variables, metaData }: any) => {
    return Promise.resolve();
    // return Promise.reject();
  },
  updateMany: ({ resource, ids, variables, metaData }: any) => {
    return Promise.resolve();
    // return Promise.reject();
  },
  custom: ({
    url,
    method,
    sort,
    filters,
    payload,
    query,
    headers,
    metaData,
  }: any) => Promise,
  getApiUrl: () => "",
};