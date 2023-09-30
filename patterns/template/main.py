from abc import ABC, abstractmethod

class Document(ABC):

    xml: dict

    def __init__(self, xml: dict) -> None:
        self.xml = xml

    @abstractmethod
    def getKey(self):
        pass

class CTe(Document):

    def __init__(self, xml):
        super().__init__(xml)

    def getKey(self):
        return 'Chave de CTe'
    
class MDFe(Document):

    def __init__(self, xml):
        super().__init__(xml)

    def getKey(self):
        return 'Chave de CTe'

    


class CancelSchema:

    def __init__(self, document: Document):
        pass

    def doBaseSchema(self):
        pass

    def generate(self):
        self.doBaseSchema()