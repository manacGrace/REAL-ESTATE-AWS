package com.wam.projimmo;

import com.wam.projimmo.entities.Maison;
import com.wam.projimmo.repositories.MaisonRepository;
import com.wam.projimmo.services.MaisonService;
import org.junit.jupiter.api.Test;
import java.util.ArrayList;
import java.util.List;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class MaisonServiceTest {
    @Test
    public void testSearchAllMaisons_returnList(){
        MaisonRepository mockRepo = mock(MaisonRepository.class);
        MaisonService maisonService = new MaisonService(mockRepo);

        List<Maison> maisonList = new ArrayList<>();
        maisonList.add(new Maison());
        when(mockRepo.findAll()).thenReturn(maisonList);

        List<Maison> result = maisonService.searchAllMaisons();
        assertEquals(maisonList, result);
    }
}
