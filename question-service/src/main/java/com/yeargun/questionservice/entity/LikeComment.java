package com.yeargun.questionservice.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name="Like_Comment")
public class LikeComment {
    @Id
    @GeneratedValue
    private Integer id;

    // user
    // post (thing)

    // like/unlike
    // this and that maybe use procedures and jdbc

}
