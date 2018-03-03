package com.nativemodule;

/**
 * Created by BI on 13-Dec-17.
 */

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class HelloManager extends ReactContextBaseJavaModule {
    public HelloManager(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "HelloManager";
    }
    @ReactMethod
    public void greetUser(String name,Boolean isAdmin, Callback callback) {
        String greeting = "welcome" + "name" + ", you" +
                (isAdmin ? "are" : "are not") + "an adminstrator";
        callback.invoke(greeting);
    }
}



