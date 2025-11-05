package com.bit2025.ajax.domain;

import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@RequiredArgsConstructor
public class Item {
	@NonNull
	private Long id;
	
	@NonNull
	private String type;

	@NonNull
	private String name;
	
	private String image;

    public Item (Long id) {
        this.id = id;
    }
}
