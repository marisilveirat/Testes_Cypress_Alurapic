describe('Api Alurapic', () => {
    it('Login da API', () => {
           cy.request({
                method: 'POST',
                url: 'http://localhost:3000/user/login',
            }).then((res) => {
                expect(res.status).to.be.equal(200)
                expect(res.body).is.not.empty
                expect(res.body).to.have.property('id')
                expect(res.body.id).to.be.equal(3)
           })
    })
})



describe('Api Alurapic', () => {
        it('Fotos do usuário', () => {
            const tempoEsperado = Math.random() * 50;
            cy.request({
                method: 'GET' ,
                url: 'http://localhost:3000/catarinamm/photos',
            }).then((res) => {
                expect(res.status).to.be.equal(200)
                expect(res.body).is.not.empty
                expect(res.body[0]).to.have.property('description')
                expect(res.body[0].description).to.be.equal('lindeza')
                expect(res.duration).to.be.lte(tempoEsperado)
                
            })
        })
    })

    describe('Api Alurapic', () => {
        it('Dados da API de comentários', () => {
            cy.request({
                method: 'GET',
                url: 'http://localhost:3000/photos/2/comments',
            }).then((res) => {
                expect(res.status).to.be.equal(200);
                expect(res.body).is.not.empty;
                expect(res.body[0]).to.have.property('text')
                expect(res.body[0].text).to.be.equal('fofo')
            })
        })
    })
    
    
