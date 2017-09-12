package com.progressoft.workshop;

import com.google.gwt.core.client.EntryPoint;
import com.progressoft.brix.domino.api.client.ClientApp;
import com.vaadin.polymer.Polymer;
import com.vaadin.polymer.app.AppDrawerElement;
import com.vaadin.polymer.app.AppHeaderElement;
import com.vaadin.polymer.app.AppToolbarElement;
import com.vaadin.polymer.iron.IronFlexLayoutElement;
import com.vaadin.polymer.iron.IronIconsElement;
import com.vaadin.polymer.iron.IronListElement;
import com.vaadin.polymer.paper.*;
import com.vaadin.polymer.vaadin.Column;
import com.vaadin.polymer.vaadin.VaadinGridElement;

import java.util.Arrays;
import java.util.logging.Logger;

public class AppClientModule implements EntryPoint {

    private static final Logger LOGGER = Logger.getLogger(AppClientModule.class.getName());

    public void onModuleLoad() {

        Polymer.importHref(Arrays.asList(AppDrawerElement.SRC,
                AppHeaderElement.SRC,
                AppToolbarElement.SRC,
                IronFlexLayoutElement.SRC,
                IronIconsElement.SRC,
                PaperIconButtonElement.SRC,
                PaperButtonElement.SRC,
                VaadinGridElement.SRC,
                IronListElement.SRC,
                PaperDrawerPanelElement.SRC,
                PaperHeaderPanelElement.SRC,
                PaperToolbarElement.SRC,
                PaperFabElement.SRC
                ));

        ClientApp.make().run(dominoOptions -> {
            dominoOptions.setDefaultServiceRoot("http://localhost:8080");
        });
        LOGGER.info("ps-beneficiary-web Application frontend have been initialized.");
    }
}
