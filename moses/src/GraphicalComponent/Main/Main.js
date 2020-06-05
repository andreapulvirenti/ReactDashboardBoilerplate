import React from 'react';
import FileManag from './FileManag/FilesManag';
import EanManag from './EANManag/EanManag';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

export default function Main() {
    return (
        <>
            <Switch className="content">
                <Route exact path="/">
                    <FileManag></FileManag>
                </Route>
                <Route path="/ean">
                    <EanManag></EanManag>
                </Route>
            </Switch>
        </>
    )
}