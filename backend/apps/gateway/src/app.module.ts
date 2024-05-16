import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ApolloGateway } from '@apollo/gateway';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      
    })
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
