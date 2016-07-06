package com.nodist;

import android.text.Html;
import android.text.Spanned;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.IllegalViewOperationException;

/**
 * Created by admin on 2016/7/6.
 */
public class HtmlModule extends ReactContextBaseJavaModule {

    public HtmlModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "HtmlRender";
    }


    @ReactMethod
    public void renderHtml(String htmlText,Promise promise) {
        Spanned spanned = Html.fromHtml(htmlText);
        String textString =  spanned.toString();
        try {
            promise.resolve(textString);
        } catch (IllegalViewOperationException e) {
            promise.reject(e.getMessage());

        }
    }
}
