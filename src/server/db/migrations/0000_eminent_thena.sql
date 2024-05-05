CREATE TABLE `job_applications` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text(256),
	`company` text(256),
	`jobDescriptionUrl` text(256),
	`salaryRangeLow` integer,
	`salaryRangeHigh` integer,
	`userId` text(256) NOT NULL,
	`isActive` integer DEFAULT true,
	`created_at` integer DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updatedAt` integer
);
