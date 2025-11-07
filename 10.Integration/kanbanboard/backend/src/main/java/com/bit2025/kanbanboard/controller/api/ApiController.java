package com.bit2025.kanbanboard.controller.api;

import java.util.List;
import java.util.Map;

import com.bit2025.kanbanboard.vo.CardVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.bit2025.kanbanboard.dto.JsonResult;
import com.bit2025.kanbanboard.repository.CardRepository;
import com.bit2025.kanbanboard.repository.TaskRepository;
import com.bit2025.kanbanboard.vo.TaskVo;

@RestController
@RequestMapping("/api")
public class ApiController {
	
	@Autowired
	private CardRepository cardRepository;

	@Autowired
	private TaskRepository taskRepository;

	@GetMapping("/card")
	public ResponseEntity<JsonResult<List<CardVo>>> readCard() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(cardRepository.findAll()));
	}
	
	@GetMapping("/task/{cardNo}")
	public ResponseEntity<JsonResult<List<TaskVo>>> readTask(@PathVariable Long cardNo) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskRepository.findAllByCardNo(cardNo)));
	}

	@PostMapping("/task")
	public ResponseEntity<JsonResult<TaskVo>> createTask(@RequestBody TaskVo taskVo) {
		taskRepository.insert(taskVo);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskVo));
	}

	@PutMapping("/task/{no}")
	public ResponseEntity<JsonResult<Map<?, ?>>> updateTask(@PathVariable Long no, String done) {
		taskRepository.updateDone(no, done);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(Map.of("no", no, "done", done)));
	}

    @DeleteMapping("/task/{no}")
    public ResponseEntity<JsonResult<Boolean>> deleteTask(@PathVariable Long no) {
        taskRepository.delete(no);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(JsonResult.success(true));
    }
}
