import { Router } from "express";
import { Ctrl_CreateSample } from "./sample.controller";

const sampleRoutes = Router({
  mergeParams: true,
  caseSensitive: false,
  strict: false,
});

sampleRoutes.get('/create-sample', Ctrl_CreateSample);
// can add more ...
// sampleRoutes.post('/create-sample-1', Ctrl_CreateSample1);
// sampleRoutes.patch('/create-sample-2', Ctrl_CreateSample2);

export default sampleRoutes;