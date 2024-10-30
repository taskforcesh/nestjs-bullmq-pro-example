import { QueueEventsListener, QueueEventsHost, OnQueueEvent } from '@taskforcesh/nestjs-bullmq-pro';
import { Logger } from '@nestjs/common';

@QueueEventsListener('audio')
export class AudioQueueEvents extends QueueEventsHost {
  private readonly logger = new Logger(AudioQueueEvents.name);

  @OnQueueEvent('completed')
  onCompleted({ jobId }: { jobId: string; returnvalue: string; prev?: string }) {
    this.logger.debug('Start completed event...');
    this.logger.debug(jobId);
    this.logger.debug('Finishing completed event');
  }
}
