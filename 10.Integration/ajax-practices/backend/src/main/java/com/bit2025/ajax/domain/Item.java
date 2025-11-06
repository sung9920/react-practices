package com.bit2025.ajax.domain;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Objects;

@Getter
@Setter
@ToString
@NoArgsConstructor
@RequiredArgsConstructor
@EqualsAndHashCode(of = "id")
public class Item {

    @NonNull
    private Long id;

    @NonNull
    private String type;

    @NonNull
    private String name;

    private String image;

    public Item(Long id) {
        this.id = id;
    }
}