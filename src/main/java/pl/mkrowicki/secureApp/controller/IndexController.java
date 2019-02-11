package pl.mkrowicki.secureApp.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.mkrowicki.secureApp.model.Sample;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
public class IndexController {

    private static final Logger logger = LoggerFactory.getLogger(IndexController.class);

    @GetMapping("/")
    public Sample main() {
        Sample sample = new Sample();
        sample.setName("Nazwa");
        sample.setContent("Zawartość");

        logger.info("Pobrano dane dla: Sample");
        return sample;
    }
}
