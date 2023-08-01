package com.priyanga.appdevelopment.Repository;

import com.priyanga.appdevelopment.Entity.ProfessionalDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfessionalRepo extends JpaRepository<ProfessionalDetail, Integer> {
}
