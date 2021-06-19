import { Router } from "express";
import sampleRoutes from "./components/sample/sample.route";

const router = Router({
  mergeParams: true,
  caseSensitive: false,
  strict: false,
});

router.use(sampleRoutes);
// can add more ...
// router.use(sampleRoutes-1);
// router.use(sampleRoutes-2);

export default router;