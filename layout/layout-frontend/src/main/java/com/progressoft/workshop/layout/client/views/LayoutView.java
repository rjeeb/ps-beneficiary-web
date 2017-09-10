package com.progressoft.workshop.layout.client.views;

import com.google.gwt.user.client.ui.IsWidget;
import com.progressoft.brix.domino.api.client.mvp.view.View;
import com.progressoft.workshop.layout.shared.extension.LayoutContext;

public interface LayoutView extends View<IsWidget> {
    void show();

    void setContent(LayoutContext.Content content);
}