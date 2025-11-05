package com.bit2025.ajax.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor

public class JsonResult<T> {
    private String result;
    private T data;
    private String message;

    public static <T> JsonResult<T> fail(String message) {
        return new JsonResult<>("fail", null, message);
    }

    public static <T> JsonResult<T> success(T data) {
        return new JsonResult<>("success", data, "요청성공");
    }

}