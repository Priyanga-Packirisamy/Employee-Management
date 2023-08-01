package com.priyanga.appdevelopment.Repository;

import com.priyanga.appdevelopment.Entity.PersonalDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonalRepo extends JpaRepository<PersonalDetail, Integer> {
}
