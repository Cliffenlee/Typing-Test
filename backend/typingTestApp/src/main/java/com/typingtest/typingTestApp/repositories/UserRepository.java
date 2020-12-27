package com.typingtest.typingTestApp.repositories;

import com.typingtest.typingTestApp.domain.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
