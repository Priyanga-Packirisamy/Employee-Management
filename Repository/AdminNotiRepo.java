package com.priyanga.appdevelopment.Repository;

import com.priyanga.appdevelopment.Entity.AdminNotification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminNotiRepo extends JpaRepository<AdminNotification, Integer> {

}
