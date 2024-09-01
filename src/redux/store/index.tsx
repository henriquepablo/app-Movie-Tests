import { configureStore } from "@reduxjs/toolkit";
import idFilme from "../reducers/idFilme";

export default configureStore({
    reducer: {
        Id_Film: idFilme,
    }
});