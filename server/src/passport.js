import { ExtractJwt } from "passport-jwt";
import passportJWT from "passport-jwt";
import dotenv from "dotenv";
import passport from "passport";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { userModel } from "./schemas/user.schema.js";

const JWTStrategy = passportJWT.Strategy;
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicKeyPath = path.join(__dirname, "../config/keys/ed25519-public.key");
const publicKey = fs.readFileSync(publicKeyPath, "utf8");

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromAuthHeaderAsBearerToken(),
        (req) => req.cookies.token,
      ]),
      secretOrKey: publicKey,
      algorithms: ["EdDSA"],
    },
    async function (jwtPayload, done) {
      try {
        const user = await userModel.findOne({ _id: jwtPayload.id });
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (error) {
        return done(error, false);
      }
    }
  )
);

export default passport;
