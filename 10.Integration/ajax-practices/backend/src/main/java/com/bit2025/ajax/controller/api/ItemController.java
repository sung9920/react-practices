package com.bit2025.ajax.controller.api;

import java.util.List;
import java.util.UUID;

import com.bit2025.ajax.dto.JsonResult;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.bit2025.ajax.domain.Item;
import org.springframework.web.multipart.MultipartFile;

@Slf4j
@RestController
@RequestMapping("/item")
@RequiredArgsConstructor

public class ItemController {
    private final List<Item> items;

    @GetMapping
    public ResponseEntity<JsonResult<List<Item>>> read() {
        log.info("Request[Get /item");
        return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(items));
    }

    @GetMapping("/{id}")
    public ResponseEntity<JsonResult<Item>> read(@PathVariable Long id) {
        log.info("Request[Get /item/{}]", id);
        return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(items.stream().filter(item -> item.getId().equals(id)).findAny().orElse(null)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<JsonResult<Boolean>> delete(@PathVariable Long id) {
        log.info("Request[Delete /item/{}]", id);
        return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(items.removeIf(item -> item.getId().equals(id))));
    }

    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<JsonResult<Item>> create(@RequestBody Item item) {
        log.info("Request[Post /item, Content-Type: application/json][{}]", item);

        long maxId = items.isEmpty() ? 0L : items.getFirst().getId();
        item.setId(maxId + 1);
        items.addFirst(item);
        return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(item));
    }

    @PostMapping(consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<JsonResult<Item>> create(Item item, MultipartFile file) {
        String filename = UUID.randomUUID().toString().concat(".").concat(file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".")));
        return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(item));
    }
}
