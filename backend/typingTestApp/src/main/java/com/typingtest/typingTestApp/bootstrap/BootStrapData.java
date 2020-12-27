package com.typingtest.typingTestApp.bootstrap;

import com.typingtest.typingTestApp.domain.PassageAttempt;
import com.typingtest.typingTestApp.domain.User;
import com.typingtest.typingTestApp.repositories.PassageAttemptRepository;
import com.typingtest.typingTestApp.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class BootStrapData implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PassageAttemptRepository passageAttemptRepository;

    public BootStrapData(UserRepository userRepository, PassageAttemptRepository passageAttemptRepository) {
        this.userRepository = userRepository;
        this.passageAttemptRepository = passageAttemptRepository;
    }

    @Override
    public void run(String... args) throws Exception {

        User cliffen = new User("cliffen", "asdzxc9!", "1", "90", "100");
        PassageAttempt passageAttempt = new PassageAttempt("88", "110", "97");

        userRepository.save(cliffen);
        passageAttemptRepository.save(passageAttempt);

        System.out.println("Started in Bootstrap");
        System.out.println("Number of Users: " + userRepository.count());
    }
}
