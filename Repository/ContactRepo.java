package com.priyanga.appdevelopment.Repository;

import com.priyanga.appdevelopment.Entity.ContactDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepo extends JpaRepository<ContactDetail, Integer> {
}
