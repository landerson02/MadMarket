package com.madhacks.madmarket.repository;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import java.util.Date;

@NoArgsConstructor
@Getter
@Setter
public class Listing {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long listingId;
    private Long buyerId;
    private Long listerId;
    private Long categoryId;
    private String name;
    private String description;
    private String price;
    private Date timestamp;
}
