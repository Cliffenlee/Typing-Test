package com.typingtest.typingTestApp.repositories;

import com.typingtest.typingTestApp.domain.PassageAttempt;
import org.springframework.data.repository.CrudRepository;

public interface PassageAttemptRepository extends CrudRepository<PassageAttempt, Long> {
}
