package com.progressoft.workshop.layout.client.ui.views;

import com.google.gwt.core.client.GWT;
import com.google.gwt.safehtml.client.SafeHtmlTemplates;
import com.google.gwt.safehtml.shared.SafeHtml;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLElement;
import org.jboss.gwt.elemento.template.TemplateUtil;

import javax.annotation.Generated;

/*
 * WARNING! This class is generated. Do not modify.
 */
@Generated("org.jboss.gwt.elemento.processor.TemplatedProcessor")
public final class Templated_Layout extends Layout {

    static interface InnerHtml extends SafeHtmlTemplates {
        @Template("<style is=\"custom-style\">    @external .iron-selected, .paper-toast-open, .horizontal-section;        .toolbar {            background: #00796B !important;        }        .toolbar > div {           justify-content: center;        }        .toolbar > div {           padding: 0px !important;           bottom: -4px !important;        }        .toolbar paper-fab {           margin: 5px;        }        [drawer] {            background-color: #ffffff !important;        }        .category {            background: #009688;            font-size: large;            color: #f1f1f1;        }        .item {            padding-left: 50px;            font-size: 15px;            min-height: 37px !important;            color: #009688;        }        .list {            background-color: #F5F4F4;        }        .list .iron-selected {            background-color: #CDE5E3;        }        .list paper-item {            border-top: solid 1px rgba(245, 245, 245, 0.6);        }        .buttons paper-material {            font-size: 13 !important;            margin: 0px;            text-transform: none !important;        }        .current {            overflow: hidden;            text-overflow: ellipsis;            white-space: nowrap;            font-size: 150%;            margin-left: 20px;            margin-right: 15px;        }        paper-header-panel {            z-index: auto !important;        }        .paper-toast-open {            z-index: 10;        }        .panel {            padding: 20px;        }        paper-item {            cursor: pointer;            oveflow: hidden;            position: relative;        }        .title {           font-size: 135%;           text-align: center;           padding: 5px;        }        @external .tall;        .toolbar.tall {           height: 108px !important;           padding: 0 !important;        }        .toolbar.tall #bottomBar {           height: 50px !important;        }        .source pre {           font-size: 12px;           line-height: 13px;           background-color: #CDE5E3;           padding: 10px;        }        .source-buttons {           background-color: #CDE5E3;           height: 45px;           padding: 0px 0px 0px 30px;           color: #009688;        }        .source-buttons iron-icon {           margin: 0px 0px 4px 4px;           width: 14px;        }        paper-header-panel[mode=\"waterfall-tall\"]  #mainContainer {          overflow: auto;        }        .hidden {           opacity: 0;        }        .horizontal-section {          min-width: 400px;        }        .iconpolymer {           --paper-fab-background: var(--paper-purple-500);        }        .icongwt {           --paper-fab-background: var(--paper-red-500);        }        .iconvaadin {           --paper-fab-background: var(--paper-light-blue-500);        }        /* Fix for https://github.com/PolymerElements/paper-menu/issues/31 */        paper-item iron-icon,        paper-item span {            pointer-events: none;        }    </style> <paper-drawer-panel data-element=\"drawerPanel\">  <div drawer=\"\">   <paper-header-panel mode=\"seamed\" data-element=\"header\">    <paper-toolbar style=\"toolbar\">     <paperfab data-element=\"logo3\" icon=\"polymer\" attributes=\"mini url:http://polymer-project.org\" style=\"iconpolymer\"></paperfab>    </paper-toolbar>    <flow-panel data-element=\"listPanel\" style=\"list\" />   </paper-header-panel>  </div>  <div main=\"\">   <paper-header-panel mode=\"waterfall-tall\">    <paper-toolbar style=\"toolbar\">     <paper-icon-button icon=\"menu\" attributes=\"paper-drawer-toggle\" />     <span data-element=\"currentLabel\" class=\"current\"></span>     <span class=\"flex\"></span>     <paper-button data-element=\"help\" style=\"buttons\">     <iron-icon icon=\"help\" />About    </paper-button>     <div class=\"source-buttons bottom flex\">      <span>VIEW SOURCE: </span>      <paper-button data-element=\"javaButton\" style=\"buttons\">      .java      <iron-icon icon=\"launch\" />     </paper-button>      <paper-button data-element=\"xmlButton\" style=\"buttons\">      .ui.xml      <iron-icon icon=\"launch\" />     </paper-button>     </div>    </paper-toolbar>    <div data-element=\"contentContainer\" style=\"panel fit\"></div>   </paper-header-panel>  </div> </paper-drawer-panel> <!--<app-header data-element=\"header\" condenses fixed>--> <!--<app-toolbar>--> <!--<div main-title>Beneficiary</div>--> <!--</app-toolbar>--> <!--</app-header>--> <!--<div class=\"contentContainer\" data-element=\"contentContainer\">--> <!----> <!--</div>-->")
        SafeHtml value();
    }

    private final static InnerHtml INNER_HTML = GWT.create(InnerHtml.class);
    private final HTMLElement templated_layout_root_element;

 public Templated_Layout() {

        this.templated_layout_root_element = (HTMLElement)DomGlobal.document.createElement("div");
        this.templated_layout_root_element.setAttribute("id", "rootDiv");
        this.templated_layout_root_element.setAttribute("height", "calc(100vh - 65px)");
        this.templated_layout_root_element.innerHTML = INNER_HTML.value().asString();

        if (this.header == null) {
            this.header = TemplateUtil.<com.vaadin.polymer.app.AppHeaderElement>resolveElementAs(templated_layout_root_element, "header");
        } else {
            TemplateUtil.replaceElement(templated_layout_root_element, "header", header);
        }
        if (this.contentContainer == null) {
            this.contentContainer = TemplateUtil.<elemental2.dom.HTMLDivElement>resolveElementAs(templated_layout_root_element, "contentContainer");
        } else {
            TemplateUtil.replaceElement(templated_layout_root_element, "contentContainer", contentContainer);
        }
    }

    @Override
    public HTMLElement asElement() {
        return templated_layout_root_element;
    }
}
