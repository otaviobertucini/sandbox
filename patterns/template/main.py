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
        return 'Chave de MDFe'


class CancelSchema(ABC):

    def __init__(self, document: Document):
        self.document = document

    def doBaseSchema(self):
        return self.document.getKey()

    @abstractmethod
    def doSpecificSchema(self):
        pass

    def generate(self):
        return self.doBaseSchema() + ' ' + self.doSpecificSchema()


class CancelCTe(CancelSchema):

    def __init__(self, document: Document):
        super().__init__(document)

    def doSpecificSchema(self):
        return 'Específico do CTe hu3 hu3'
    
class CancelMDFe(CancelSchema):

    def __init__(self, document: Document):
        super().__init__(document)

    def doSpecificSchema(self):
        return 'Específico do MDFe kkkkkkkk'


def main():
    
    cte = CTe({ 'chave': 123 })
    mdfe = MDFe({ 'chave': 123 })
    cancelcte = CancelCTe(cte)
    cancelmdfe = CancelMDFe(cte)

    print(cancelcte.generate())
    print(cancelmdfe.generate())


main()
