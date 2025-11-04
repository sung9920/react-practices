package com.bit2025.ajax.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor

public class JsonResult<T> {
    private String result;
    private T data;
    private String message;

    public static JsonResult<Object> fail(String message) {
        return new JsonResult<>(message);
    }

    public static <T> JsonResult<T> success(T data) {
        return new JsonResult<>(data);
    }

    private JsonResult(String message) {
        result = "fail";
        data = null;
        this.message = message;
    }

    private JsonResult(T data) {
        result = "success";
        this.data = data;
        message = null;
    }
}