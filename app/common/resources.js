(function (global, resources) {
    'use strict';

    var isPandocOn = true
        , uploadDocumentMessage = isPandocOn ? 'PDF or DOCX' : 'PDF';
    resources.UPLOAD_DOCUMENT_MESSAGE = uploadDocumentMessage;
    resources.allowedUploadDocumentExtensions = isPandocOn ? ['pdf', 'docx'] : ['pdf'];
    resources.isFullCollaborationToggleOn = true;//global.isFeatureToggledOn('fullCollaboration');
    resources.isInlineEditingToggleOn = true;//global.isFeatureToggledOn('inlineEditing');
    resources.isNewContentToggleOn =true;// global.isFeatureToggledOn('newContent');
    resources.isEmailNotificationToggleOn =true;// global.isFeatureToggledOn('emailNotification');
    resources.messages = {
        login: {
            forgot_password: {
                SEND_EMAIL_SUCCESS: "You will receive an email shortly with a link to reset your password.",
                EMAIL_NOT_VALID: "No record of your email was found in our system. Please contact Zynx Support at <a href='mailto:support@zynx.com'>support@zynx.com</a>."
            }
        },
        bpci: {
            guideline: {
                SAVE_MESSAGE: 'Your changes have been saved',
                URL_CHANGE_WARNING: 'There are unsaved changes.',
                ROUTE_CHANGE_WARNING: 'There are unsaved changes. Are you sure you want to leave?'
            },
            iec: {
                SAVE_MESSAGE: 'Your changes have been saved',
                URL_CHANGE_WARNING: 'There are unsaved changes.',
                ROUTE_CHANGE_WARNING: 'There are unsaved changes. Are you sure you want to leave?',
                VALIDATION_ERROR_HEADER:'Validation Error'
            },
            checklist: {
                ROUTE_CHANGE_WARNING: 'There are unsaved changes. Are you sure you want to leave?',
                URL_CHANGE_WARNING: 'There are unsaved changes.',
                SAVE_MESSAGE: 'Your changes have been saved',
                REMOVE_ITEM_MODAL_HEADER: 'Remove Item from Checklist?',
                REMOVE_ITEM_MODAL_BODY: 'You are about to remove item(s) from checklist. Do you want to proceed?',
                APPLY_CRITERIA_MODAL_HEADER: 'Apply these criteria?',
                APPLY_CRITERIA_MODAL_BODY: 'Applying new criteria will change the interventions in this list. This action cannot be undone. Do you wish to proceed?',
                CRITERIA_CHANGED_MODAL_HEADER: 'Save changes?',
                CRITERIA_CHANGED_MODAL_BODY: 'The Criteria Panel does not match the current criteria for this checklist. Click Cancel to reset the criteria, click OK to accept the mismatch.',
                CANNOT_SAVE_RELEASED_MODAL_HEADER: 'Status Change Required',
                CANNOT_SAVE_RELEASED_MODAL_BODY: 'The status value must be changed to something other than “Released” in order to save the checklist.',
                CANNOT_RELEASE_NEW_MODAL_HEADER: 'Status Change Required',
                CANNOT_RELEASE_NEW_MODAL_BODY: 'The checklist must be saved to something other than "Released" for review before publishing it.',
                DTS_VALIDATION_MODAL_HEADER: 'Term Validation Error'
            },
            checklists: {
                DEFAULT_PAGE_TITLE: 'View Available Checklists',
                EXPORT_LINK_TOOLTIP: 'Export last released version to Excel',
                EXPORT_LINK_TOOLTIP_NO_RELEASE: 'No released version of this checklist',
                MATCHING_CATEGORY_ORDER_SET: 'Order Set Only',
                MATCHING_CATEGORY_IPOC: 'Plan of Care only',
                MATCHING_CATEGORY_ORDER_SET_AND_IPOC: 'Order Set and Plan of Care',
                CANCEL_EXPORT: 'Cancel',
                EXPORT: 'Export'
            },
            scopedInterventions: {
                REMOVE_FROM_ACTIVE_LIST_MODAL_HEADER: 'Remove Scoped Intervention?',
                REMOVE_FROM_ACTIVE_LIST_MODAL_BODY: 'You are about to remove the scoped intervention "{0}" from the active list. Do you want to proceed?'
            },
            CLIENT_CHECKLIST_ABOUT_PAGE_TITLE: 'About Zynx Vital Interventions',
            CLIENT_PERFORMANCE_MEASURE_ABBREVIATIONS_PAGE_TITLE: 'Performance Measure Abbreviations',
            WHAT_IS_NEW_IN_THIS_RELEASE_TEXT: 'See what\'s new in this release'
        },

        analytics: {
            assessment: {
                full_collaboration: {
                    review_task: {
                        in_completed_task: {
                            TITLE: 'Your Tasks',
                            EMPTY_TEXT: 'Click on the line items on the left to view detail and evidence.'
                        },
                        completed_task: {
                            TITLE: 'Completed Tasks'
                        }
                    },

                    admin_task: {
                        TITLE:'Review Recommended Changes',
                        EMPTY_TEXT:'Currently there are no discussions. To start a discussion, recommend making a change to the document. All recommendations and associated comments will appear here.',
                        INSTRUCTIONAL_TEXT: 'All administrator recommendations and associated comments are shown here. You can accept or reject each recommendation to finalize the proposed changes.' +
                            ' Click the <span class="segment-comment-icon"><i class="fa fa-comment fa-fw"></i></span>  icon next to items in the document to view other reviewer comments.' +
                            ' Click the <span class="general-comments-icon"><i class="fa fa-comments fa-fw"></i></span> icon to view comments on the overall document.'
                    },

                    change_log:{
                        REVIEW_REPORT_MODAL_TITLE: 'CHANGE LOG',
                        DISMISS_BUTTON_TEXT: 'Cancel'
                    },

                    inline_editing: {
                        CANCEL: 'Cancel',
                        OKAY: 'Okay',
                        SUGGEST_THIS: 'Recommend this {0}',
                        ORIGINAL: 'Original Text',
                        EDIT: 'Recommended Edit',
                        REASON_FOR_EDIT: 'Rationale for edit',
                        SUGGEST_AN_EDIT_TITLE: 'Recommend an Edit',
                        SUGGEST_EDIT_ORIGINAL_TEXT_INSTRUCTION:'Update this field with any missing items and delete any extraneous characters',
                        SUGGEST_EDIT_RECOMMENDED_EDIT_INSTRUCTION:'Update this field to reflect the change you are recommending',
                        SUGGEST_EDIT_RATIONALE_FOR_EDIT_INSTRUCTION:'Enter the reason for this recommendation',

                        SUGGEST_DELETION: 'Recommend this deletion',
                        SUGGEST_TO_DELETE_ITEM: 'Recommend a Deletion',
                        REASON_FOR_DELETION: 'Rationale for deletion',
                        SUGGEST_DELETE_ORIGINAL_TEXT_INSTRUCTION:'Update this field with any missing items and delete any extraneous characters',
                        SUGGEST_DELETE_RATIONALE_FOR_DELETE_INSTRUCTION:'Enter the reason',

                        ALERT_FOR_DELETE_SUGGESTION: 'Deleting this recommendation will also delete any associated comments and votes. This action cannot be undone. Do you want to proceed?',
                        TITLE_OF_DELETE_SUGGESTION: "Delete this recommendation",
                        DELETE_SUGGESTION: 'Delete recommendation',
                        ADD_GENERAL_SUGGESTION_TEXT:'Leave comments for this specific item here. For comments on the document as a whole, click the {0} icon.',
                        NO_SUGGESTION_TEXT: 'No comments or suggestions yet',
                        ADD_SUGGESTION_HEAD: 'Discussion',
                        SUGGEST_A_NEW_LINE_ITEM: 'Recommend a New Item',
                        ADD_LINE_ITEM_TEXT:'Specify the new item text and location. The new item will appear at the bottom of this document after you select "Recommend this addition"',
                        ADD_LINE_ITEM:'Add item',
                        REASON_FOR_ADDITION:'Rationale for addition',
                        LOCATION_OF_NEW_ITEM:'Specify the location of the new item (eg, section, item above, item below)',
                        ENTER_THE_NEW_LINE_ITEM_HERE:'Enter the new item here (Required)',
                        EXCLUDE_RECOMMENDATION:'Reject Recommendation',
                        INCLUDE_RECOMMENDATION:'Accept Recommendation',
                        ADDITIONAL_NOTES:'Additional notes',
                        INCLUDE_SUGGESTION_TEXT:'If desired, document a reason for accepting this recommendation.',
                        EXCLUDE_SUGGESTION_TEXT:'If desired, document a reason for rejecting this recommendation.',
                        EVIDENCE_ICON_DISABLE_TOOLTIP:'Action disabled. To exit matching mode, click Back to List in the right panel.',
                        assessment_button_title:{
                            ADD_LINE_ITEM:'Click this button to suggest adding a new item. New items will appear at the bottom of this document.',
                            GENERAL_COMMENT:'General Comments',
                            RESOLVE_BUTTON: 'Click to modify selection. Any notes entered will be preserved.'
                        },
                        generalComments:{
                          HEADER:'General Comments',
                          REVIEWER_INSTRUCTIONAL_TEXT:'Comment here on the overall document. To comment on a specific item, click on the text in the document.',
                          EMPTY_TEXT:'No comments yet'
                        },
                        referencePopup:{
                            TITLE:'Associated Evidence/Discussion',
                            INSTRUCTIONAL_TEXT:'To match this text segment to an intervention, first open the intervention in the right-hand panel.',
                            VIEW_DISCUSSION:'View Discussion'
                        }
                    },
                    comment: {
                        CANCEL: 'Cancel',
                        DELETE_THIS_COMMENT: 'Delete this Comment',
                        DELETE_COMMENT: 'Delete Comment'
                    }
                },
                ACTIVITY_EMPTY_TEXT: "There are no activities on this assessment.",
                SIDE_BAR_INSTRUCTIONAL_TEXT: "All activity for this assessment is shown here. Click on the comment thread to see the details of that discussion.",
                ADDITIONAL_INFO_SHOW: 'Show Additional Information',
                ADDITIONAL_INFO_HIDE: 'Hide Additional Information',
                AUTOMATION_NOT_COMPLETE: 'Not automated; match manually',
                CHECKLIST_ASIDE: 'To match a text segment from your content to an intervention, open the intervention below (Show Details) and click on the matching text segment in your content. To remove a text match, click on the x icon next to it.',
                DISCARD_MATCHES_MODAL_HEADER: 'Discard Matches',
                DISCARD_MATCHES_MODAL_BODY: 'You are about to discard matches for the intervention "{0}". Are you sure you want to discard these matches?',
                DISCARD_MATCHES_MODAL_DISMISS: 'Cancel',
                DISCARD_MATCHES_MODAL_ACCEPT: 'Discard Matches',
                SAVE_FLAGS_MODAL_HEADER: 'Save Flag Names',
                SAVE_FLAGS_MODAL_BODY: 'You are about to change the flag names on all assessments for your organization. Are you sure you want to save the flag names?',
                SAVE_FLAGS_MODAL_DISMISS: 'Cancel',
                SAVE_FLAGS_MODAL_ACCEPT: 'Save Flag Names',
                REVIEWER_LINK_MODAL_HEADER: 'Reviewer Link',
                REVIEWER_LINK_MODAL_BODY: 'Copy (Ctrl+C) the entire link and paste (Ctrl+V) into your e-mail to send to reviewers. This assessment will remain available for review via this link only when the assessment is in Review status.',
                REVIEWER_LINK_MODAL_DISMISS: 'Close',
                ICON_TOOLTIP_OUTCOME_MEASURES: 'Includes Outcome Measures',
                ICON_TOOLTIP_PERFORMANCE_MEASURES: 'Includes Performance Measures',
                ICON_TOOLTIP_GUIDELINES: 'Includes Guidelines',
                ICON_TOOLTIP_NO_OUTCOME_MEASURES: 'Does not include Outcome Measures',
                ICON_TOOLTIP_NO_PERFORMANCE_MEASURES: 'Does not include Performance Measures',
                ICON_TOOLTIP_NO_GUIDELINES: 'Does not include Guidelines',
                ICON_TOOLTIP_NO_EVIDENCE: 'Does not include Evidence',
                ICON_TOOLTIP_NOTE: 'Has a Note',
                ICON_TOOLTIP_COMMENT_NUM: 'Has Comment',
                EVIDENCE_TOOLTIP_REMOVE: 'Remove this text segment',
                INTERVENTION_TOOLTIP_REMOVE: 'Remove this intervention',
                EVIDENCE_TOOLTIP_MOVE_TO: 'Move to this text segment',
                FLAG_SCOPED_INTERVENTION_TOOLTIP: 'Flag this Intervention',
                FLAG_NONE: 'No Flag',
                FLAG_EDIT: 'Edit Flag Names',
                FLAG_EDIT_CANCEL: 'Cancel',
                FLAG_EDIT_SAVE: 'Save',
                MATCH: 'Match',
                MATCH_CANCEL: 'Cancel',
                NO_SCOPED_INTERVENTIONS_MATCHED: 'There are no items that match these filters.',
                SAVE_ERROR: 'Changes were not saved. Try again.',
                STATUS_ASSESS: 'Assess',
                STATUS_REVIEW: 'Review',
                STATUS_COMPLETE: 'Complete',
                STATUS_CHANGE_TO_COMPLETE_MESSAGE: 'Assessment cannot be edited until\nit is returned to Assess or Review status',
                READ_ONLY: 'READ-ONLY',
                NOTE_ADDING: 'Add a Note',
                NOTE_HIDE: 'Hide Note',
                NOTE_SHOW: 'Show Note',
                NOTE_ENTER: 'Enter Note',
                NOTE_CANCEL: 'Cancel',
                NOTE_SAVE: 'Save',
                IGNORE: 'Not Scored',
                IGNORE_UNDO: 'Make Scorable',
                IGNORE_DOCUMENT_LOCATION: 'Location (URL) of satisfying document',
                IGNORE_CANCEL: 'Cancel',
                IGNORE_SAVE: 'Save',
                IGNORE_INTERVENTION_TOOLTIP: 'Not Scored',
                IGNORE_INTERVENTION_DO_NOT_TOOLTIP: 'Make Scorable',
                MATCHING_GUIDELINE_SHOW: 'Show Matching Guidance',
                GUIDELINE_SHOW: 'Show Essential Guidance',
                GUIDELINE_HIDE: 'Hide Essential Guidance',
                MATCHING_GUIDELINE_HIDE: 'Hide Matching Guidance',
                GUIDELINE_GUIDANCE_HEADER: 'Essential Guidance',
                ESSENTIAL_GUIDANCE: 'Show Essential Guidance',
                MATCHING_GUIDANCE: 'Show Matching Guidance',
                SATISFIED: 'Satisfied',
                SATISFIED_NOT: 'Not Satisfied',
                SATISFIED_NOT_SCORED: 'Not Scored',
                SATISFIED_COUNT_AS: 'Count as Satisfied',
                SATISFIED_COUNT_AS_NOT: 'Count as Not Satisfied',
                SATISFIED_CLEAR_OVERRIDE: 'Do Not Count as Satisfied',
                SATISFIED_NOT_CLEAR_OVERRIDE: 'Do Not Count as Not Satisfied',
                SATISFIED_COUNTED_AS: 'Counted as Satisfied',
                SATISFIED_COUNTED_AS_NOT: 'Counted as Not Satisfied',
                SATISFIED_COUNT: '{0} INTERVENTIONS: {1} Satisfied, {2} Unsatisfied, {3} Not Scored',
                PRACTICES_OUTCOMES: 'Outcomes',
                PRACTICES_PERFORMANCE_MEASURES: 'Performance Measures',
                PRACTICES_GUIDELINES: 'Guidelines',
                PRACTICES_VITAL_INTERVENTIONS:'Only Vital Interventions',
                PRACTICE_OUTCOMES_WITH_ICON:'<span class="outcome-filter"></span> Outcomes',
                PRACTICE_PERFORMANCE_MEASURES_WITH_ICON:'<span class="performance-filter"></span> Performance Measures',
                PRACTICE_GUIDELINES_WITH_ICON:'<span class="guideline-filter"></span> Guidelines',
                FADE_TIME: 2000,
                FILTER_STATUS: 'Status',
                FILTER_PRACTICES: 'Practices',
                FILTER_FLAGS: 'Flags',
                FILTER_SHOW_ALL: 'Show All',
                FILTER_SHOW_ONLY_VITAL_INTERVENTIONS:'Show Only Vital Interventions',
                FILTER_SHOW_ONLY_VITAL_INTERVENTIONS_TOOLTIP:'Vital Interventions include Outcomes, Performance Measures, and Guidelines',
                EXPORT_ASSESSMENT_RESULTS: 'Export Results',
                GENERATE_REVIEWER_LINK: 'Reviewer Link',
                REVIEW_REPORT_LINK: 'Review Report',
                REVIEW_CHANGE_LOG_LINK: 'View Change Log',
                MORE: 'Show Details',
                LESS: 'Hide Details',
                SECTION_MAKE_SCORABLE: "Make This Section Scorable",
                SECTION_MAKE_NOT_SCORABLE: "Make This Section Not Scorable",
                TIMING: 'Timing',
                TARGET: 'Target',
                CLINICAL_ACTION: 'Clinical Action',
                SUB_POPULATION_NAME: 'Subpopulation',
                FOUND_SEGMENTS: 'Found Segments',
                MATCHED_ITEM: 'Matched Item:',
                OPPOSING_MATCHED_ITEM: 'Opposing Matched Item:',
                RECOMMENDED_MATCHED_ITEM: 'Recommended Matched Item:',
                RECOMMENDATIONS: 'Recommendations',
                ENTER_RECOMMENDATION: 'Enter a recommendation',
                ENTER_COMMENT: 'Enter a comment',
                DELETE_RECOMMENDATION_MODAL_HEADER: 'Delete Recommendation',
                DELETE_RECOMMENDATION_MODAL_BODY: "Deleting this recommendation will also delete any comments and votes associated with it. This action cannot be undone. Are you sure you want to delete it?",
                DELETE_RECOMMENDATION_ACCEPT_BUTTON_TEXT: 'Delete',
                ASSESSMENT_REVIEW_REPORT_MODAL_HEADER: 'Assessment Review Report',
                ASSESSMENT_REVIEW_REPORT_LINK_TOOLTIP: 'There must be at least 1 comment or vote to enable the report',
                ASSESSMENT_REVIEW_REPORT_DOCUMENT_REVIEWED: 'DOCUMENT(S) REVIEWED',
                ASSESSMENT_REVIEW_REPORT_INTERVENTIONS_UTILIZED: '{0} VITAL INTERVENTIONS UTILIZED',
                ASSESSMENT_REVIEW_REPORT_ASSESSMENT_NAME: 'ASSESSMENT NAME',
                ASSESSMENT_REVIEW_REPORT_INTERVENTION: 'INTERVENTION',
                ASSESSMENT_REVIEW_REPORT_RECOMMENDATION: 'RECOMMENDATION',
                ASSESSMENT_REVIEW_REPORT_AGREE: 'AGREE',
                ASSESSMENT_REVIEW_REPORT_DISAGREE: 'DISAGREE',
                REVIEW_LINK_DISABLED_TOOLTIP: 'The assessment must be set to Review and have at least one recommendation to enable the Reviewer Link.'
            },
            assessments: {
                PAGE_HEADER: 'Assessments',
                DELETE_ASSESSMENT_MODAL_HEADER: 'Delete Assessment',
                DELETE_ASSESSMENT_MODAL_BODY: 'You are about to delete the assessment "{0}". This action cannot be undone. ' +
                'Are you sure you want to delete it?',
                DELETE_ASSESSMENT_MODAL_ACCEPT: 'Delete Assessment',
                RERUN_ASSESSMENT_MODAL_HEADER: 'Run Assessment',
                RERUN_ASSESSMENT_MODAL_BODY: 'The current assessment has one or more recommendations, comments, and votes.  This data will <b>not</b> be carried over to the new assessment version.  Do you want to continue with rerunning the assessment?',
                RERUN_ASSESSMENT_MODAL_ACCEPT: 'Run Assessment',
                PAGE_INSTRUCTIONS: 'These are the assessments your organization has created. Click on an assessment ' +
                'name to view the results, or hover over the name to see other options.',
                EMPTY_LIST: 'Assessments are a pairing of your organization\'s content with a Zynx Vital Interventions set to provide an automated analysis of the selected content. You do not have any assessments yet. When you assess your first document, it will be listed here.',
                ASSESS_DOCUMENT_BUTTON: 'Assess a Document',
                DELETE_BUTTON: 'Delete',
                RERUN_ASSESSMENT: 'Rerun Assessment',
                SHOW_INFORMATION: 'Show Information',
                HIDE_INFORMATION: 'Hide Information',
                PREVIOUS_VERSIONS: 'Previous Versions',
                RENAME: 'Rename',
                CANCEL: 'Cancel',
                NEW_DOCUMENT_AND_ZYNX_CHECKLIST_TOOLTIP: 'New document version and Zynx Vital Interventions available',
                NEW_DOCUMENT_AND_CUSTOM_CHECKLIST_TOOLTIP: 'New document version and Vital Interventions available',
                NEW_DOCUMENT_TOOLTIP: 'New document version available',
                NEW_CUSTOM_CHECKLIST_TOOLTIP: 'New Vital Interventions available',
                NEW_ZYNX_CHECKLIST_TOOLTIP: 'Vital Interventions have been updated',
                NO_UPDATES_TOOLTIP: 'No new document version or Vital Interventions available',
                CHANGE: 'Change',
                DOCUMENTS_INCLUDED: 'Documents Included',
                SEARCH_PART_TITLE: "Search Assessments by Tag"
            },
            assessment_document_panel: {
                CANCEL: 'Cancel',
                RERUN_ASSESSMENT: 'Rerun Assessment',
                RUN_ASSESSMENT: 'Run Assessment'
            },
            profiles: {
                ENTER_YOUR_CURRENT_PASSWORD: 'Enter your current password',
                ENTER_YOUR_NEW_PASSWORD: 'Enter your new password',
                REENTER_YOUR_NEW_PASSWORD: 'Re-enter your new password',
                REENTER_YOUR_NEW_FIRSTNAME: 'Enter your first name',
                REENTER_YOUR_NEW_LASTNAME: 'Enter your last name',
                SAVE_CHANGES_BUTTON: 'Save Changes',
                PASSWORD_LABEL: 'Password',
                DISPLAY_NAME_LABEL: 'Display Name',
                USERNAME_LABEL: 'Username',
                SAVE_MESSAGE: 'Your changes have been saved'
            },
            instructional_video: {
                INSTRUCTIONAL_VIDEO_NAME: 'Tutorial Library'
            },
            documents: {
                PAGE_HEADER: 'Documents',
                UPLOAD_BUTTON: 'Upload a Document',
                IMPORT_AUTHORSPACE_BUTTON: 'Import a Document from AuthorSpace',
                IMPORT_AUTHORSPACE_INSTRUCTIONS: 'Import a document from your custom directory in AuthorSpace. With your document open in AuthorSpace, copy the entire URL from the browser address bar and paste it below.',
                IMPORT_AUTHORSPACE_SUCCESS_MESSAGE: 'Successfully imported document from AuthorSpace.',
                IMPORT_AUTHORSPACE_ERROR_MESSAGE: 'Error importing document, please check the url and try again.',
                REVIEW_DOCUMENT_SUCCESS_MESSAGE:'Success! Document-only assessment created; view in Assessments tab.',
                REVIEW_DOCUMENT_FAILURE_MESSAGE:'Fail to review this document!',
                AUTHORSPACE_INPUT_LABEL: 'Paste the URL for AuthorSpace document',
                DELETE_DOCUMENT_MODAL_HEADER: 'Delete Document',
                DELETE_DOCUMENT_MODAL_BODY: 'You are about to delete the document "{0}". This action cannot be undone, ' +
                'but any existing assessments containing this document will not be affected. ' +
                'Are you sure you want to delete it?',
                DELETE_DOCUMENT_MODAL_ACCEPT: 'Delete Document',
                PAGE_INSTRUCTIONS: 'Documents are clinical content such as order sets, plans of care, and other CDS ' +
                'content developed by your organization. They can be assessed using Zynx Checklists.',
                UPLOAD_INSTRUCTIONS: 'Upload a document using the box below. At this time, only documents in '
                + uploadDocumentMessage + ' format may be uploaded.',
                EMPTY_LIST: 'No documents have been uploaded for your organization yet. Would you like to upload one?',
                DELETE_FAILURE: 'Could not delete document at this time. Please try again later.',
                DELETE_BUTTON: 'Delete',
                RENAME: 'Rename',
                CANCEL: 'Cancel',
                SHOW_INFORMATION: 'Show Information',
                HIDE_INFORMATION: 'Hide Information',
                PREVIOUS_VERSIONS: 'Previous Versions',
                UPLOAD_NEW_VERSION: 'Upload New Version',
                REVIEW_THIS_DOCUMENT:'Review This Document',
                ALERT_REVIEW_THIS_DOCUMENT:'Initiate a review for documents with no associated Vital Interventions checklist',
                ASSESS_THIS_DOCUMENT_BUTTON: 'Assess This Document',
                UPLOAD: 'Upload',
                IMPORT: 'Import',
                IMPORT_DOCUMENT: 'Import Document',
                RUN_ASSESSMENT_BUTTON: 'Run This Assessment',
                CANCEL_BUTTON: 'Cancel',
                ADD_MORE_DOCUMENTS: 'Add more documents to this assessment.',
                MAX_UPLOAD_ERROR: 'Fifteen documents can be included in an assessment. Remove {0} document(s) to continue.',
                DOCUMENT_UPLOAD_LIMIT: "Please select {0} documents or fewer to upload.",
                TYPE_ERROR: "Please select only " + uploadDocumentMessage + " documents for upload.",
                SIZE_ERROR: "Please select a smaller document to upload. The limit is {0}.",
                CONVERSION_FAILURE: "Knowledge Analyzer™ could not read this document.",
                SEARCH_PART_TITLE: "Search Documents by Tag"
            },
            checklists: {
                newContent: {
                    OUTCOME_TOOLTIP: 'Includes Outcome Measures',
                    PERFORMANCE_TOOLTIP: "Includes Performance Measures",
                    GUIDELINES_TOOLTIP: "Includes Guidelines",
                    EVIDENCE_TOOLTIP: "Includes Evidence"
                },
                PAGE_HEADER: 'Checklists',
                ZYNX_INTERVENTION_SETS: 'Zynx Checklists',
                CUSTOM_INTERVENTION_SETS: 'My Checklists',
                PAGE_INSTRUCTIONS: 'Zynx Checklists may be used to assess your documents. These checklists contain ' +
                'evidence-based interventions, including Vital Interventions that consist of performance measures, ' +
                'guidelines, and key clinical processes tied to clinical and financial outcomes such as mortality, ' +
                'cost, length of stay, admissions, readmissions, and hospital-acquired conditions.',
                EMPTY_LIST: 'There are currently no checklists. Create a checklist now.',
                USE_TO_ASSESS_BUTTON: 'Use to Assess a Document',
                DELETE_CUSTOM_CHECKLIST_MODAL_HEADER: 'Delete Custom Intervention Set',
                DELETE_CUSTOM_CHECKLIST_MODAL_BODY: 'You are about to delete the custom intervention set "{0}". This action cannot be undone, ' +
                'but any existing assessments containing this custom intervention set will not be affected. Are you sure you want to delete it?',
                DELETE_CUSTOM_CHECKLIST_MODAL_ACCEPT: 'Delete Custom Intervention Set',
                ACCEPT_ZYNX_CHANGES_MODAL_HEADER: 'Update Interventions: {0}',
                ACCEPT_ZYNX_CHANGES_MODAL_BODY: 'Once accepted, Zynx changes will be reflected in any assessments that contain these interventions. ' +
                'To benefit from the most current matching information for these interventions, we suggest that you re-run the assessments that contain them.',
                ACCEPT_ZYNX_CHANGES_MODAL_ACCEPT: 'Accept changes',
                ACCEPT_CHANGES_AND_RERUN: 'Accept changes and re-run the assessments'
            },
            assessmentsWizard: {
                PAGE_HEADER_STEP_1: 'Checklists',
                PAGE_INSTRUCTIONS_STEP_1: 'Checklists are used to assess your content.',
                PAGE_HEADER_STEP_2: 'Documents',
                PAGE_INSTRUCTIONS_STEP_2: 'Now upload a document using the box below, or select a document already ' +
                'uploaded from the list below. At this time, only documents in ' + uploadDocumentMessage
                + ' format may be uploaded.',
                SELECT_INSTRUCTIONS_STEP_2: 'Documents are clinical content such as order sets and other CDS ' +
                'content developed by your organization. They can be assessed using Zynx Checklists.',
                DELETE_FAILURE_STEP_2: 'Could not delete document at this time. Please try again later.',
                PAGE_HEADER_STEP_3: 'Assessment Name',
                PAGE_INSTRUCTIONS_STEP_3: 'One last step: Name this assessment so you can find it later. (Or you can change it later if you prefer.)',
                NAME_INSTRUCTIONS_STEP_3: 'Enter assessment name',
                FINISH_NOTE_STEP_3: 'After hitting the button below, your assessment will be ready shortly.',
                RUN_ASSESSMENT_BUTTON: 'Run This Assessment',
                NEXT_STEP: 'Go to Next Step',
                CANCEL_BUTTON: 'Cancel',
                CREATE_ASSESSMENT_FAILURE: 'Could not create assessment at this time. Please try again later.',
                DELETE_BUTTON: 'Delete',
                SELECT_DOCUMENT_TO_ASSESS: 'Select a document to assess',
                SELECT_ZYNX_INTERVENTION: 'Select a Checklist',
                NAME_AND_RUN_ASSESSMENT: 'Name and run the assessment',
                ZYNX_VITAL_INTERVENTIONS_TO_BE_USED_FOR_ASSESSMENT: 'Checklists to be Used for Assessment',
                DOCUMENT_TO_BE_ASSESSED: 'Document to be Assessed',
                CHANGE: 'Change'

            },
            general: {
                EDIT_TAG_WARNING: "You are about to change the tag {0} to {1}. This change will affect all documents and assessments assigned this tag. Are you sure you want to change this tag?",
                EDIT_TAG: "Change Tag",
                EDIT_TAG_CANCEL: "Cancel",
                EDIT_TAG_CONFIRM: "Change Tag"
            },
            dashboard: {
                PAGE_INSTRUCTIONS: "These are the assessments your organization has created in review. Click on View Activity to see new comments, votes.",
                EMPTY_LIST: "You have no assessments in review.",
                VIEW_ASSESSMENT: "View Assessment",
                ACTIVITY_THUMBS_UP: "<i class='fa fa-thumbs-o-up'></i>",
                ACTIVITY_THUMBS_DOWN: "<i class='fa fa-thumbs-o-down'></i>",
                ACTIVITY_EMPTY_TEXT: "There are no activities on this assessment.",
                SIDE_BAR_INSTRUCTIONAL_TEXT: "All activity for this assessment is shown here. Click on the comment thread to see the details of that discussion.",
                REVIEWER_LINK_TEXT: "Reviewer Link"
            }
        },

        admin: {
            ENVIRONMENT_CREATE_SUCCESS: 'Environment {0} has been created.',
            ENVIRONMENT_CREATE_FAILURE: 'Environment {0} has failed to be created. {1}',
            ENVIRONMENT_UPDATE_SUCCESS: 'Environment {0} has been updated.',
            ENVIRONMENT_UPDATE_FAILURE: 'Environment {0} has failed to update. {1}',
            USER_CREATE_SUCCESS: 'User {0} {1} ({2}) has been created.',
            USER_CREATE_FAILURE: 'User {0} {1} ({2}) has failed to create.  {3}',
            USER_UPDATE_SUCCESS: 'User {0} {1} ({2}) has been updated.',
            USER_UPDATE_FAILURE: 'User {0} {1} ({2}) has failed to update.  {3}',
            AUTHORSPACE_CREATE_SUCCESS: 'AuthorSpace Environment successfully created',
            AUTHORSPACE_CREATE_FAILURE: 'AuthorSpace Environment failed to create',
            AUTHORSPACE_UPDATE_SUCCESS: 'AuthorSpace Environment successfully updated',
            AUTHORSPACE_UPDATE_FAILURE: 'AuthorSpace Environment failed to update',
            AUTHORSPACE_VALIDATE_SUCCESS: 'Validation successful',
            AUTHORSPACE_VALIDATE_FAILURE: 'AuthorSpace Environment not valid. Please check fields and try again',
            FEATURE_CREATE_SUCCESS: 'Feature {0} has been created.',
            FEATURE_CREATE_FAILURE: 'Feature {0} has failed to be created.  {1}',
            FEATURE_UPDATE_SUCCESS: 'Feature {0} has been updated.',
            FEATURE_UPDATE_FAILURE: 'Feature {0} has failed to update.  {1}'
        },

        general: {
            TECHNICAL_ISSUES_ERROR_MESSAGE: 'Your action cannot be completed due to technical issues. Try again later or contact customer support.',
            FADE_TIME: 3000,
            SHOW_TIME: 2000
        }
    };

    resources.messageTypes = {
        SUCCESS: 'success',
        ERROR: 'error'
    };

    resources.apiBase = '//' + window.apiDomain + '/api/v1';
    resources.apiTokenBoundary = 900000;

    resources.routes = {
        full_collaboration: {
            inline_editing: {
                VOTE_FOR_COMMENT: resources.apiBase + '/assessments/:assessmentId/segments/:segmentId/suggestion/:suggestionId/comment/:commentId/vote/:value',
                VOTE_FOR_SUGGESTION: resources.apiBase + '/assessments/:assessmentId/segments/:segmentId/suggestion/:suggestionId/vote/:value',
                VOTE_FOR_GENERAL_COMMENT: resources.apiBase + '/assessments/:assessmentId/generalComment/:generalCommentId/vote/:value'
            }
        },
        CURRENT_USER: resources.apiBase + '/currentUserInfo?refresh=:refresh',
        SET_NOTIFIED: resources.apiBase + '/setUserNotified',
        VALIDATE_PASSWORD: resources.apiBase + '/user/validatePassword',
        UPDATE_USER_PROFILE: resources.apiBase + '/user/updateProfile',
        EMAIL_PREFERENCE: resources.apiBase + '/user/emailPreference',
        INSTRUCTIONAL_VIDEO: resources.apiBase + '/instructionalVideo?refresh=:refresh',
        INTERVENTIONS: resources.apiBase + '/interventions',
        CHECKLISTS: resources.apiBase + '/checklists',
        CHECKLIST: resources.apiBase + '/checklists/:id',
        IEC: resources.apiBase + '/iecs/:id',
        IEC_SEARCH: resources.apiBase + '/iecs/search',
        IEC_TABLE_VIEW_SEARCH: resources.apiBase + '/iecs/searchTableView',
        IEC_LOAD_SCOPED_INTERVENTIONS: resources.apiBase + '/iecs/loadSelectableScopedInterventions',
        GUIDELINE: resources.apiBase + '/guidelines/:id',

        EXISTS_USERNAME: resources.apiBase + '/user/isUserNameExist/',
        SEND_RESET_EMAIL: resources.apiBase + '/user/reset',
        UPDATE_USER_PASSWORD: resources.apiBase + '/user/updatePassword',

        CUSTOM_CHECKLISTS: resources.apiBase + '/customChecklists',
        CUSTOM_CHECKLIST: resources.apiBase + '/customChecklists/:id',
        CUSTOM_CHECKLIST_BLACKLIST_ADD: resources.apiBase + '/customChecklists/:id/blacklist/add',
        CUSTOM_CHECKLIST_BLACKLIST_REMOVE: resources.apiBase + '/customChecklists/:id/blacklist/remove',
        CUSTOM_CHECKLIST_DELETE: resources.apiBase + '/customChecklists/:id/delete',
        CUSTOM_CHECKLIST_UPDATE: resources.apiBase + '/customChecklists/:id/update',
        CUSTOM_CHECKLIST_RENAME: resources.apiBase + '/customChecklists/:id/rename',

        INTERVENTIONS_PARTIAL: resources.apiBase + '/interventions?query=:query',
        SCOPED_INTERVENTIONS: resources.apiBase + '/scopedInterventions/:id',
        SCOPED_INTERVENTION_NEW: resources.apiBase + '/scopedInterventions/new',
        SCOPED_INTERVENTION_COPY: resources.apiBase + '/scopedInterventions/:id/copy',
        ACTIVE_SCOPED_INTERVENTIONS: resources.apiBase + '/scopedInterventions?interventionId={0}&status=active',
        SCOPED_INTERVENTIONS_COUNT: resources.apiBase + '/scopedInterventions/activecount',
        UPDATE_SCOPED_INTERVENTION_STATUS: resources.apiBase + '/scopedInterventionsLight/{0}',
        SCOPED_INTERVENTION_FIELDS: resources.apiBase + '/fields',
        FIELD: resources.apiBase + '/fields/:field',
        SECTION_LIST: resources.apiBase + '/data/sections.json',
        CHECKLIST_COUNT: resources.apiBase + '/checklists/count',
        GUIDELINE_COUNT: resources.apiBase + '/guidelines/count',
        IEC_COUNT: resources.apiBase + '/iecs/count',
        GUIDELINES: resources.apiBase + '/guidelines/list',
        CHECKLIST_STATUS_FIELD_VALUES: resources.apiBase + '/fields/checklistStatus',
        PERFORMANCE_MEASURES: resources.apiBase + '/fields/performanceMeasure',
        CHECKLIST_VIEW_PARTIAL: '/partials/bpci/:view.html',
        CHECKLIST_EXPORT: '/editors/checklists/:id/export',
        CHECKLIST_PREVIEW: '/viewers/checklists?preview=1#/:id/view/clinical-order',
        BLACKLIST_CHECKLIST: resources.apiBase + '/checklists/:id/blacklist',
        VISIBLE_CHECKLIST: resources.apiBase + '/checklists/:id/high-accuracy-list',

        ASSESSMENTS: resources.apiBase + '/assessments',
        ASSESSMENT_WITHOUT_CHECKLIST: resources.apiBase + '/assessmentWithoutChecklist',
        ASSESSMENT: resources.apiBase + '/assessments/:id',
        ASSESSMENT_TAGS: resources.apiBase + '/assessments/:id/tags',
        ASSESSMENT_ACTIVITY: resources.apiBase + '/assessments/:id/activity',
        ASSESSMENT_TAG_DELETE: resources.apiBase + '/assessments/:id/tag/:tagId',
        ASSESSMENT_DELETED: resources.apiBase + '/assessments/:id/deleted',
        ASSESSMENT_MATCH: resources.apiBase + '/assessments/:id/interventions/:interventionId/matches/segments/:segmentId',
        ASSESSMENT_GENERAL_COMMENTS: resources.apiBase + '/assessments/:id/generalComment',
        ASSESSMENT_GENERAL_COMMENT_DELETE: resources.apiBase + '/assessments/:id/generalComment/delete/:generalCommentId',
        ASSESSMENT_SCOPED_INTERVENTION_IGNORE: resources.apiBase + '/assessments/:id/scopedInterventions/:scopedInterventionId/ignore',
        ASSESSMENT_SCOPED_INTERVENTION_NOTE: resources.apiBase + '/assessments/:id/scopedInterventions/:scopedInterventionId/note',
        ASSESSMENT_RECOMMENDATION_VOTE: resources.apiBase + '/assessments/:id/recommendations/:recommendationId/vote',
        ASSESSMENT_RECOMMENDATIONS: resources.apiBase + '/assessments/:id/recommendations?refresh=:refresh',
        ASSESSMENT_SCOPED_INTERVENTION_RECOMMENDATIONS: resources.apiBase + '/assessments/:id/scopedInterventions/:scopedInterventionId/recommendations',
        ASSESSMENT_SCOPED_INTERVENTION_RECOMMENDATION: resources.apiBase + '/assessments/:id/scopedInterventions/:scopedInterventionId/recommendations/:recommendationId',
        ASSESSMENT_COMMENTS: resources.apiBase + '/assessments/:id/scopedInterventions/:scopedInterventionId/recommendations/:recommendationId/comments',
        ASSESSMENT_COMMENT: resources.apiBase + '/assessments/:id/scopedInterventions/:scopedInterventionId/recommendations/:recommendationId/comments/:commentId',
        ASSESSMENT_SCOPED_INTERVENTION_DOCUMENT_LOCATION: resources.apiBase + '/assessments/:id/scopedInterventions/:scopedInterventionId/documentLocation',
        ASSESSMENT_SCOPED_INTERVENTION_MATCHES: resources.apiBase + '/assessments/:id/scopedInterventions/:scopedInterventionId/matches',
        ASSESSMENT_SCOPED_INTERVENTION_FLAG: resources.apiBase + '/assessments/:id/scopedInterventions/:scopedInterventionId/flag',
        ASSESSMENT_SCOPED_INTERVENTION_OVERRIDE: resources.apiBase + '/assessments/:id/scopedInterventions/:scopedInterventionId/override',
        ASSESSMENT_VIEWED: resources.apiBase + '/assessments/:id/viewed',
        ASSESSMENT_COMPLETED: resources.apiBase + '/assessments/:id/completed',
        ASSESSMENT_REVIEW_MODEL: resources.apiBase + '/assessments/:id/review',
        ASSESSMENT_PATCHES: resources.apiBase + '/assessments/:assessmentId/patches',
        ASSESSMENT_STATUS: resources.apiBase + '/assessments/:id/status',
        ASSESSMENT_UPDATE: resources.apiBase + '/assessments/:id/updates',
        ASSESSMENT_VERSIONS_METADATA: resources.apiBase + '/assessments/:id/versions',
        ASSESSMENT_RENAME: resources.apiBase + '/assessments/:id/name',
        ASSESSMENT_SAVE_SUGGESTION: resources.apiBase + '/assessments/:id/saveSuggestion/:segId',
        ASSESSMENT_SAVE_LINE_ITEM: resources.apiBase + '/assessments/:id/saveLineItem/:documentId',
        ASSESSMENT_DELETE_SUGGESTION: resources.apiBase + '/assessments/:id/segments/:segId/deleteSuggestion/:suggestionId',
        ASSESSMENT_ADD_COMMENT: resources.apiBase + '/assessments/:id/addComment/:segId',
        ASSESSMENT_SEGMENT_COMMENT: resources.apiBase + '/assessments/:assessmentId/segments/:segmentId/segmentComments/:commentId',
        ASSESSMENT_SEGMENT_COMMENT_VOTE: resources.apiBase + '/assessments/:assessmentId/segments/:segmentId/segmentComments/:commentId/votes/:value',
        ASSESSMENT_DELETE_COMMENT: resources.apiBase + '/assessments/:assessmentId/segment/:segmentId/suggestion/:suggestionId/comment/:commentId',
        ASSESSMENT_RESOLVE_SUGGESTION: resources.apiBase + '/assessments/:id/segment/:segId/suggestion/:suggestionId',
        ASSESSMENT_REVIEW_LOGIN_ERROR: '//' + window.apiDomain + '/error/reviewerLogin',
        ASSESSMENT_REVIEW_OVERDUE_ERROR: '//' + window.apiDomain + '/error/reviewerOverdue',

        TRAINING: resources.apiBase + '/training/:type',

        LOAD_ENABLED_FEATURES: resources.apiBase + "/features",


        ENVIRONMENT_GET_REVIEWER_TOKEN: resources.apiBase + '/environment/reviewerToken',

        CLIENT_CONTENT_UPLOAD: resources.apiBase + '/clientContentUpload',
        CLIENT_CONTENT_UPDATE: resources.apiBase + '/clientContentUpload/:id/document',
        CLIENT_CONTENT_HTML: resources.apiBase + '/clientContent/:id/html',
        CLIENT_CONTENT_AUTHORSPACE_HTML: resources.apiBase + '/clientContent/:id/authorspace',
        CLIENT_CONTENT_UPDATE_METADATA: resources.apiBase + '/clientContent/:id/metadata',
        CLIENT_CONTENT_VERSIONS_METADATA: resources.apiBase + '/clientContent/:id/versions?refresh=' + Math.random(),
        CLIENT_CONTENT_HTML_METADATA: resources.apiBase + '/clientContent/:id/metadata',
        CLIENT_CONTENT_RENAME: resources.apiBase + '/clientContent/:id/name',
        CLIENT_CONTENT_LIST_METADATA: resources.apiBase + '/clientContent/metadata?refresh=' + Math.random(),
        CLIENT_CONTENT_TAG: resources.apiBase + '/clientContent/:id/tag?refresh=:refresh',
        CLIENT_CONTENT_TAG_DELETE: resources.apiBase + '/clientContent/:id/tag/:tagId',
        CLIENT_CONTENT_TAG_UPDATE: resources.apiBase + '/clientContent/tag/:id/update/:newValue',
        CLIENT_CONTENT_TAG_LIST: resources.apiBase + '/clientContent/tagList',

        AUTHORSPACE_IMPORT: resources.apiBase + '/clientContent/authorSpaceOrderSetXml/import',
        USER_HAS_AUTHORSPACE_ENVIRONMENT: resources.apiBase + '/user/hasAuthorSpaceEnvironment',

        ADMIN_ENVIRONMENT: resources.apiBase + '/admin/environment/:action/:id',
        ADMIN_AUTHORSPACE_ENVIRONMENT: resources.apiBase + '/admin/authorSpaceEnvironment/:action/:id',
        ADMIN_USER: resources.apiBase + '/admin/user/:action/:id',
        ADMIN_PRODUCT: resources.apiBase + '/admin/product/:action/:id',
        ADMIN_FEATURE: resources.apiBase + '/admin/feature/:action/:id',

        FLAGS: resources.apiBase + '/flags',
        KA_INSTRUCTIONAL_VIDEO: resources.apiBase + '/instructionalVideo',
        OAUTH_ACCESS_TOKEN: '/accessToken',
        LOGOUT: '/logout',
        SPRING_LOGOUT: '/j_spring_security_logout',
        LOG_BACK_END: '/v1/message/log',

        splash: {

            LIST: resources.apiBase + '/splash/list?refresh=:refresh',
            DISMISS: resources.apiBase + '/splash/:id/dismiss',
            DISMISS_ALL: resources.apiBase + '/splash/dismissAll',
            NEWSFEED:resources.apiBase + '/splash/newsfeed',
            GETIMG:resources.apiBase + '/splash/getimg'
        },

        clientChecklists: {
            LIST: '/list',
            ORDER_VIEW: '/:id/version/:version/view/:view',
            ORDER_PREVIEW: '/:id/view/:view',
            ABOUT: '/about',
            PM_ABBREVIATIONS: '/pmabbreviations'
        },

        checklists: {
            LIST: '/list',
            EDIT: '/edit/:id',
            NEW: '/new'
        },

        guidelines: {
            LIST: '/list',
            EDIT: '/edit/:id',
            NEW: '/new'
        },

        iecs: {
            LIST: '/list',
            NEW: '/new',
            EDIT: '/edit/:id',
            COPY: '/:id/copy',
            TABLE_VIEW: '/tableView'
        },

        scopedInterventions: {
            EDIT: '/:id/edit',
            NEW: '/new',
            COPY: '/:id/copy',
            LIST: '/editors/scopedInterventions/list',
            EXTERNAL_EDIT: '/editors/scopedInterventions#/:id/edit',
            EXTERNAL_NEW: '/editors/scopedInterventions#/new?format=html&interventionId={0}&interventionName={1}'
        },

        analytics: {
            ROOT: '/',
            INDEX: '/analytics',
            ASSESSMENT_VIEW: '/assessments/view/:id',
            ASSESSMENT_REVIEWER_VIEW: '/assessments/review/:id',
            EXTERNAL_ASSESSMENT_REVIEW: '/analytics/assessments/{1}/review?auth={0}',
            ASSESSMENTS_LIST: '/assessments/list',
            ASSESSMENTS_LIST_QUERY: '/assessments/list?assessmentId=:id',
            CHECKLISTS: '/checklists',
            CHECKLIST_VIEW: '/checklists/:id/version/:version/view/:view',
            CUSTOM_CHECKLISTS: '/customChecklists',
            CUSTOM_CHECKLIST_VIEW: '/customChecklists/:id',
            DOCUMENTS: '/documents',
            DASHBOARD: '/dashboard',
            ASSESSMENTS_WIZARD: '/assessments/new',
            BEST_PRACTICES: '/about-zvi',
            ABOUT: '/about',
            HELP: '/help',
            PROFILE: '/profile',
            INSTRUCTIONAL_VIDEO: '/instructionalVideo',
            ANNOUNCEMENTS: '/announcements',
            SYSTEM_REQUIREMENTS: '/requirements',
            SCOPED_INTERVENTION_SIDEBAR_PARTIAL: '/analytics/scopedInterventionsSidebar?showReviewMode={0}',
            NEW_SCOPED_INTERVENTION_SIDEBAR_PARTIAL: '/analytics/newScopedInterventionsSidebar?showReviewMode={0}',
            SCOPED_INTERVENTION_PANEL_PARTIAL: '/analytics/scopedInterventionPanel?showReviewMode={0}',
            NEW_SCOPED_INTERVENTION_PANEL_PARTIAL: '/analytics/newScopedInterventionPanel?showReviewMode={0}',
            ASSESSMENT_BANNER_PARTIAL: '/analytics/assessmentBanner?showReviewMode={0}',
            NEW_ASSESSMENT_BANNER_PARTIAL: '/analytics/newAssessmentBanner?showReviewMode={0}',
            SCOPED_INTERVENTION_SIDEBAR_HEADER_PARTIAL: '/analytics/scopedInterventionsSidebarHeader?showReviewMode={0}',
            FLAG_PANEL_PARTIAL: '/partials/analytics/assessments/assessment/flag-panel.html',
            NEW_SCOPED_INTERVENTION_SIDEBAR_HEADER_PARTIAL: '/analytics/newScopedInterventionsSidebarHeader?showReviewMode={0}'
        },

        admin: {
            ENVIRONMENT_EDIT: '/environment/:action/:id?',
            ENVIRONMENT_LIST: '/environments/list',
            FEATURE_EDIT: '/feature/:action/:id?',
            FEATURE_LIST: '/features/list',
            AUTHORSPACE_ENVIRONMENT_EDIT: '/authorspace-environment/:action/:id?',
            USER_EDIT: '/user/:action/:id?',
            USER_LIST: '/users/list'
        }
    };

    resources.eventNames = {
        UPDATE_HEADER: 'UpdateHeader',
        UPDATE_DISPLAY_NAME: 'UpdateDisplayName',
        HTTP_MESSAGE: 'HttpMessage',
        PAGE_TITLE_UPDATE: 'PageTitleUpdate',
        ACCESS_TOKEN_UNAVAILABLE: 'AccessTokenUnavailable'
    };

    resources.pageTitlePrefix = 'Knowledge Analyzer | ';

    resources.pageTitles = {
        NEWS_FEED: resources.pageTitlePrefix + 'News Feed',
        ASSESSMENT: resources.pageTitlePrefix + 'Assessment',
        ASSESSMENTS: resources.pageTitlePrefix + 'Assessments',
        CHECKLISTS: resources.pageTitlePrefix + 'Intervention Sets™',
        DOCUMENTS: resources.pageTitlePrefix + 'Documents',
        INSTRUCTIONAL_VIDEO: resources.pageTitlePrefix + 'Tutorial Library',
        SELECT_A_CHECKLIST: resources.pageTitlePrefix + 'Select a Zynx Vital Interventions set',
        SELECT_A_DOCUMENT: resources.pageTitlePrefix + 'Select a Document',
        NAME_THIS_ASSESSMENT: resources.pageTitlePrefix + 'Name this Assessment',
        HELP: resources.pageTitlePrefix + 'Help',

        admin: {
            USER_LIST: 'User List',
            USER_EDIT: 'User Edit',
            ENVIRONMENT_LIST: 'Environment List',
            ENVIRONMENT_EDIT: 'Environment Edit',
            AUTHORSPACE_ENVIRONMENT_EDIT: 'Authorspace Environment Edit',
            FEATURE_LIST: 'Feature List',
            FEATURE_EDIT: 'Feature Edit'
        }
    };

    resources.classNames = {
        typeahead: {
            SIDEBAR: 'sidebar-typeahead'
        }
    };

    resources.careSettings = [
        {careSettingName: 'Inpatient', id: 'b637f737d2814f3b81d66445d6a04429'},
        {careSettingName: 'Outpatient', id: '125082649b5b41ceb60d8f34f484951f'}
    ];

    resources.frequentlyUsedFormats = [
        {formatName: 'Order Set', id: 'c81890b5f6cf46039d77822ae0dd25dc'},
        {formatName: 'Plan of Care', id: '9a3c8a08990d4376880f8f968f8742dc'}
    ];

    resources.productIds = {
        ZYNX_CARE_ID: '22c14d97-a78a-4d81-a1e3-e189fcecc485',
        ZYNX_ORDER_ID: 'edd89969-3d91-453e-83dd-269da99018f8',
        ZYNX_FORECASTER_ID: '3d947b1f-a5e3-48be-aa86-e0cda8ebc197',
        ZYNX_AMBULATORY_FORECASTER_ID: '3deaf5ab-ea74-4bdb-9442-db49ee4d8a61'
    };

    resources.propertyChains = {
        'clinical-order': {
            scopedInterventions: ['interventions', 'scopes', 'scopedInterventions'],
            careSettings: ['sections', 'interventions'],
            performanceMeasures: ['sections', 'interventions', 'scopes', 'scopedInterventions', 'performanceMeasures'],
            outcomes: ['sections', 'interventions', 'scopes', 'scopedInterventions', 'outcomes'],
            formats: ['sections', 'interventions', 'scopes', 'scopedInterventions', 'formats'],
            impactThresholds: ['sections', 'interventions', 'scopes', 'scopedInterventions', 'outcomes', 'impactThresholds']
        },

        'recommendation-order': {
            scopedInterventions: ['interventions', 'scopes', 'scopedInterventions'],
            careSettings: ['sections', 'interventions'],
            performanceMeasures: ['sections', 'interventions', 'scopes', 'scopedInterventions', 'performanceMeasures'],
            outcomes: ['sections', 'interventions', 'scopes', 'scopedInterventions', 'outcomes'],
            formats: ['sections', 'interventions', 'scopes', 'scopedInterventions', 'formats'],
            impactThresholds: ['sections', 'interventions', 'scopes', 'scopedInterventions', 'outcomes', 'impactThresholds']
        }
    };

    resources.enabledFeatures = true;//enabledFeatures;

    resources.votes = {'YES': 'yes', 'NO': 'no'};

    resources.guidelineFields = {
        'Any': 'any',
        'Ref ID': 'legacyId',
        'Status': 'status',
        'Title': 'title',
        'Organization': 'guidelineName'
    };

    resources.splashSlides = [
        //TODO: (Tech) You should increase this id, Should not less than those exist id.
        {
            id: 20,
            title: '',
            subtitle: 'New checklists, more content (April 27, 2016)',
            imgClass: 'splash20',
            learnMoreMsg: "<div class='paragraphs'><p>The following 9 new checklists have been released and are now available on the Checklists page:</p>" +
            "<ul>" +
            "<li>DKA/HHS – Pediatric</li>" +
            "<li>Endotracheal Intubation – Emergent</li>" +
            "<li>Extracorporeal Shock Wave Lithotripsy</li>" +
            "<li>Intermediate Care Management – Pediatric</li>" +
            "<li>Mastectomy</li>" +
            "<li>Paracentesis</li>" +
            "<li>Skin and Soft Tissue Infection</li>"+
            "<li>Skin and Soft Tissue Infection – Pediatric</li>"+
            "<li>Urinary Diversion – Pediatric</li>"+
            "</ul>" +
            "<p>The following 7 previously existing checklists have been updated to include additional guideline recommendations and evidence-based content beyond the Vital Interventions (performance measures, top-level guideline recommendations, and key clinical processes that impact clinical and financial outcomes):" +
            "</p>" +
            "<ul>" +
            "<li>Alcohol Withdrawal</li>" +
            "<li>Bipolar Disorder</li>" +
            "<li>Depression</li>" +
            "<li>Diabetes Mellitus – Gestational</li>" +
            "<li>DKA/HHS</li>" +
            "<li>Gastrointestinal Bleeding – Upper</li>" +
            "<li>Pancreatitis – Acute</li>"+
            "</ul>" +
            "</div>",
            icon: '../../img/splash/splash20.png',
            intro: "We are pleased to announce the release of 9 new checklists including infectious disease, pediatric, procedural, and surgical topics. Also, 7 previously existing checklists have been expanded to include additional guideline recommendations and evidence-based content.",
            desc: "<div class='paragraphs'>" +
            "<div class='left-picture'>" +
                "<img class='splash20' src='../../img/splash/splash20.png'>"+
            "</div><div class='right-content'>"+
            "<p>The following 9 new checklists have been released and are now available on the Checklists page:</p>" +
            "<ul>" +
            "<li>DKA/HHS – Pediatric</li>" +
            "<li>Endotracheal Intubation – Emergent</li>" +
            "<li>Extracorporeal Shock Wave Lithotripsy</li>" +
            "<li>Intermediate Care Management – Pediatric</li>" +
            "<li>Mastectomy</li>" +
            "<li>Paracentesis</li>" +
            "<li>Skin and Soft Tissue Infection</li>"+
            "<li>Skin and Soft Tissue Infection – Pediatric</li>"+
            "<li>Urinary Diversion – Pediatric</li>"+
            "</ul>" +
            "<p>The following 7 previously existing checklists have been updated to include additional guideline recommendations and evidence-based content beyond the Vital Interventions (performance measures, top-level guideline recommendations, and key clinical processes that impact clinical and financial outcomes):" +
            "</p>" +
            "<ul>" +
            "<li>Alcohol Withdrawal</li>" +
            "<li>Bipolar Disorder</li>" +
            "<li>Depression</li>" +
            "<li>Diabetes Mellitus – Gestational</li>" +
            "<li>DKA/HHS</li>" +
            "<li>Gastrointestinal Bleeding – Upper</li>" +
            "<li>Pancreatitis – Acute</li>"+
            "</ul>" +
            "</div></div>"
        },
        {
            id: 19,
            title: '',
            subtitle: 'New checklists (March 30, 2016)',
            imgClass: 'splash19',
            learnMoreMsg: "<div class='paragraphs'><p>The following 6 new checklists have been released and are now available on the Checklists page:</p>" +
            "<ul>" +
            "<li>Colonoscopy</li>" +
            "<li>Gastrointestinal Bleeding – Lower</li>" +
            "<li>Transfusion – Red Blood Cell</li>" +
            "<li>Cystic Fibrosis – Pediatric</li>" +
            "<li>Gastroenteritis – Acute, Pediatric</li>" +
            "<li>Necrotizing Enterocolitis – Neonatal</li>" +
            "</ul>" +
            "<p>For the sake of brevity, we have removed the “adult” label from checklists that apply to adult populations. In the absence of any age qualifiers, you can assume that a checklist applies to adults." +
            "</p></div>",
            icon: '../../img/splash/splash19.png',
            intro: "We are pleased to announce the release of 6 new checklists including gastrointestinal, transfusion, and pediatric content. Note that checklists for adult populations no longer carry the label of “adult”.",
            desc: "<div class='paragraphs'><p><img class='splash19' src='../../img/splash/splash19.png'>The following 6 new checklists have been released and are now available on the Checklists page:" +
            "<ul>" +
            "<li>Colonoscopy</li>" +
            "<li>Gastrointestinal Bleeding – Lower</li>" +
            "<li>Transfusion – Red Blood Cell</li>" +
            "<li>Cystic Fibrosis – Pediatric</li>" +
            "<li>Gastroenteritis – Acute, Pediatric</li>" +
            "<li>Necrotizing Enterocolitis – Neonatal</li>" +
            "</ul>" +
            "<p>For the sake of brevity, we have removed the “adult” label from checklists that apply to adult populations. In the absence of any age qualifiers, you can assume that a checklist applies to adults.</p>" +
            "</p></div>"
        },
        {
            id: 18,
            title: '',
            subtitle: 'New checklists, more content (February 24, 2016)',
            imgClass: 'splash18',
            learnMoreMsg: "<div class='paragraphs'>" +
                "<p>Zynx Health’s vision is to make Knowledge Analyzer your exclusive solution for updates/maintenance. As our initial step toward that vision, we are adding new checklists and expanding existing checklists to include more of the evidence-based content you need beyond the Vital Interventions (performance measures, guidelines, and key clinical processes that impact clinical and financial outcomes)." +
            " One previously existing checklist (Sepsis – Adult) has undergone major revisions as a part of the new methodology and 11 new checklists have been released:</p>"
            +"<ul>"
            +"<li>Arthrocentesis</li>"
            +"<li>Chest Tube Insertion</li>"
            +"<li>Craniotomy – Adult</li>"
            +"<li>Croup – Pediatric</li>"
            +"<li>Hypoglycemia – Neonatal</li>"
            +"<li>Influenza – Adult</li>"
            +"<li>Influenza – Pediatric</li>"
            +"<li>Lumbar Puncture</li>"
            +"<li>Seizure – Pediatric</li>"
            +"<li>Spontaneous Abortion</li>"
            +"<li>Vertigo</li>"
            +"</ul>"
            +"<p>We are also making some changes to the user interface related to the expanded content. See the <a href='../../documents/splash-pdf/KA Release Notes_Expanded Content.pdf' target='_blank'>Release Notes</a> for more information.</p>"
            +"</div>",
            icon: '../../img/splash/splash14.png',
            intro: 'As an initial step toward achieving our vision to make Knowledge Analyzer your exclusive solution for updates/maintenance, we are expanding the checklists to include more of the evidence-based content you need. Eleven new checklists, one revised checklist, and some user interface changes are now available with this expanded evidence methodology. ',
            desc: "<div class='paragraphs'>" +
            "<div class='splash18'><p><img src='../../img/splash/splash14.png'>Zynx Health’s vision is to make Knowledge Analyzer your exclusive solution for updates/maintenance. " +
            "As our initial step toward that vision, we are adding new checklists and expanding existing checklists to include more of the evidence-based content you need beyond the Vital Interventions (performance measures, guidelines, and key clinical processes that impact clinical and financial outcomes). " +
            "One previously existing checklist (Sepsis – Adult) has undergone major revisions as a part of the new methodology and 11 new checklists have been released:</p>"
            +"<ul>"
            +"<li>Arthrocentesis</li>"
            +"<li>Chest Tube Insertion</li>"
            +"<li>Craniotomy – Adult</li>"
            +"<li>Croup – Pediatric</li>"
            +"<li>Hypoglycemia – Neonatal</li>"
            +"<li>Influenza – Adult</li>"
            +"<li>Influenza – Pediatric</li>"
            +"<li>Lumbar Puncture</li>"
            +"<li>Seizure – Pediatric</li>"
            +"<li>Spontaneous Abortion</li>"
            +"<li>Vertigo</li>"
            +"</ul>"
            +"<p>We are also making some changes to the user interface related to the expanded content. See the <a href='../../documents/splash-pdf/KA Release Notes_Expanded Content.pdf' target='_blank'>Release Notes</a> for more information.</p>"
            +"</div></div>"
        },
        {
            id: 17,
            title: '',
            subtitle: 'Browser support (January 20, 2016)',
            imgClass: 'splash17',
            learnMoreMsg: "<div class='paragraphs'>" +
                "<p>Zynx Health will align with Microsoft Corporation’s decision to cease support of older versions of IE in order to maintain optimal performance and security of our products. Going forward, IE 11 will be the only Microsoft browser supported for new feature development. We will continue to support non-IE browsers (ie, Chrome, Firefox, Safari)." +
            "</div>",
            icon: '../../img/splash/splash17.png',
            intro: 'As part of the release on January 19, Internet Explorer 11 (IE 11) will be the only Microsoft browser supported as part of this and future Knowledge Analyzer™ enhancements. However, Zynx will continue to support Knowledge Analyzer on non-IE browsers (ie, Chrome, Firefox, Safari).',
            desc: "<div class='paragraphs'>" +
                "<p><img class='splash17' src='../../img/splash/splash17.png'>Zynx Health will align with Microsoft Corporation’s decision to cease support of older versions of IE in order to maintain optimal performance and security of our products. Going forward, IE 11 will be the only Microsoft browser supported for new feature development. We will continue to support non-IE browsers (ie, Chrome, Firefox, Safari).</p>" +
            "</div>"
        },
        {
            id: 16,
            title: '',
            subtitle: 'Advanced consensus building (January 19, 2016)',
            imgClass: 'splash16',
            learnMoreMsg: "<div class='paragraphs'>" +
                "<p>In response to client feedback requesting a universal and singular review process, we are pleased to announce the next generation of Knowledge Analyzer™, which can facilitate all clinician reviews at your organization. This release enables collaboration on any document, including those that are tied to a Zynx assessment as well as those that are not.</p>" +
                "<p>With this upgrade, you (the administrator) will be able to:" +
                    "<ul>" +
                        "<li>Recommend an edit to, addition to, or deletion from your document. Recommendations can be made to any item in the document, even if they are not tied to an item in a Zynx checklist.</li>" +
                        "<li>Document those recommendations you will implement.</li>" +
                        "<li>Print a report of all votes and comments, including comments not related to your recommendations.</li>" +
                    "</ul>" +
                "</p>" +
                "<p>With this upgrade, reviewers will be able to:" +
                    "<ul>" +
                        "<li>View a task list of your recommendations with explicit instructions to vote and/or comment.</li>" +
                        "<li>Comment on any items in the document, regardless of whether they are tied to your recommendations.</li>" +
                        "<li>Leave general and overall comments on the document.</li>" +
                        "<li>Vote on other reviewers’ comments.</li>" +
                    "</ul>" +
                "</p>" +
                "<p>View the <a href='../../documents/splash-pdf/Release_Notes_Consensus_Builder_Full_Collaboration_V2.pdf' target='_blank'>Release Notes</a> to learn more.</p>" +
            "</div>",
            icon: '../../img/splash/splash16.png',
            intro: 'We are pleased to announce the next generation of Knowledge Analyzer™, which can facilitate clinical collaboration on all of your documents. This upgrade allows your clinicians to provide asynchronous feedback at their convenience with a single user-friendly solution, making it easy to gather and consolidate their input.',
            desc: "<div class='paragraphs'><p><img class='splash16' src='../../img/splash/splash16.png'>" +
                "In response to client feedback requesting a universal and singular review process, we are pleased to announce the next generation of Knowledge Analyzer™, which can facilitate all clinician reviews at your organization. This release enables collaboration on any document, including those that are tied to a Zynx assessment as well as those that are not.</p>" +
                "<p>With this upgrade, you (the administrator) will be able to:" +
                    "<ul>" +
                        "<li>Recommend an edit to, addition to, or deletion from your document. Recommendations can be made to any item in the document, even if they are not tied to an item in a Zynx checklist.</li>" +
                        "<li>Document those recommendations you will implement.</li>" +
                        "<li>Print a report of all votes and comments, including comments not related to your recommendations.</li>" +
                    "</ul>" +
                "</p>" +
                "<p>With this upgrade, reviewers will be able to:" +
                    "<ul>" +
                        "<li>View a task list of your recommendations with explicit instructions to vote and/or comment.</li>" +
                        "<li>Comment on any items in the document, regardless of whether they are tied to your recommendations.</li>" +
                        "<li>Leave general and overall comments on the document.</li>" +
                        "<li>Vote on other reviewers’ comments.</li>" +
                    "</ul>" +
                "</p>" +
                "<p>View the <a href='../../documents/splash-pdf/Release_Notes_Consensus_Builder_Full_Collaboration_V2.pdf' target='_blank'>Release Notes</a> to learn more.</p>" +
            "</div>"
        },
        {
            id: 15,
            title: '',
            subtitle: 'New checklists released (December 10, 2015)',
            imgClass: 'splash15',
            learnMoreMsg: "<div class='paragraphs'><p>The following 4 new checklists have been released and are now available on the Vital Interventions page:" +
                "<ul>" +
                "<li>Transplant – Heart</li>" +
                "<li>Transplant – Kidney</li>" +
                "<li>Transplant – Liver</li>" +
                "<li>Transplant – Lung</li>" +
                "</ul></p></div>",
            icon: '../../img/splash/splash14.png',
            intro: "We are pleased to announce the release of 4 new transplant checklists.",
            desc: "<div class='paragraphs'><p><img class='splash15' src='../../img/splash/splash14.png'>The following 4 new checklists have been released and are now available on the Vital Interventions page:" +
                "<ul>" +
                "<li>Transplant – Heart</li>" +
                "<li>Transplant – Kidney</li>" +
                "<li>Transplant – Liver</li>" +
                "<li>Transplant – Lung</li>" +
                "</ul></p></div>"
        },
        {
            id: 14,
            title: '',
            subtitle: 'New checklists released (November 9, 2015)',
            imgClass: 'splash14',
            learnMoreMsg: "<div class='paragraphs'><p>The following 2 new checklists have been released and can now be found on the Vital Interventions page:" +
            "<ul>" +
            "<li>Nephrectomy</li>" +
            "<li>Pancreatectomy</li>" +
            "</ul></p></div>",
            icon: '../../img/splash/splash14.png',
            intro: "We are pleased to announce the release of 2 new surgical checklists.",
            desc: "<div class='paragraphs'><p><img class='splash14' src='../../img/splash/splash14.png'>The following 2 new checklists have been released and can now be found on the Vital Interventions page:" +
            "<ul>" +
            "<li>Nephrectomy</li>" +
            "<li>Pancreatectomy</li>" +
            "</ul></p></div>"
        },
        {
            id: 13,
            title: '',
            subtitle: 'Multi-Documents Increased to 15 (October 16, 2015)',
            imgClass: 'splash13',
            learnMoreMsg: "<div class='paragraphs'><p>The number of documents that can be included in any given assessment has increased from 10 to 15. As a result, Knowledge Analyzer can be used to compare all related content to a particular Vital Interventions checklist, even if your order sets are built in a modular fashion. Furthermore, you can potentially include related plans of care or other forms of clinical decision support in your assessment to ensure that you are providing the best care from all perspectives. Click <a href='../../documents/splash-pdf/Refresher on Multi-Document Upload and Multi-Document Assessments 16th.pdf' target='_blank'>here</a> to read more about uploading multiple documents and running a multi-document assessment.</p></div>",
            icon: '../../img/splash/splash13.jpg',
            intro: "The number of documents that can be tied to any given assessment has increased from 10 to 15. This ensures that Knowledge Analyzer can be used to compare all related content to a particular Vital Interventions checklist, even if your order sets (± plans of care) are built in a modular fashion. ",
            desc: "<div class='paragraphs'><p><img class='splash13' src='../../img/splash/splash13.jpg'>" +
            "The number of documents that can be included in any given assessment has increased from 10 to 15. As a result, Knowledge Analyzer can be used to compare all related content to a particular Vital Interventions checklist, even if your order sets are built in a modular fashion. Furthermore, you can potentially include related plans of care or other forms of clinical decision support in your assessment to ensure that you are providing the best care from all perspectives. Click <a href='../../documents/splash-pdf/Refresher on Multi-Document Upload and Multi-Document Assessments 16th.pdf' target='_blank'>here</a> to read more about uploading multiple documents and running a multi-document assessment." +
            "</p></div>"
        },
        {
            id: 12,
            title: '',
            subtitle: 'New checklists released (October 9, 2015)',
            imgClass: 'splash12',
            learnMoreMsg: '<div class="paragraphs"><p>' +
            'The following 4 new checklists have been released and ' +
            'can now be found on the Vital Interventions page' +
            '<ul>' +
            '<li>Critical Care Management – Adult</li>' +
            '<li>Critical Care Management – Neonatal</li>' +
            '<li>Critical Care Management – Pediatric</li>' +
            '<li>Hepatectomy</li>' +
            '</ul>' +
            '</p></div>',
            icon: '../../img/splash/splash12.png',
            intro: 'We are pleased to announce the release of 4 new checklists. ' +
            'These include critical care and surgical topics.',
            desc: '<div class="paragraphs"><div class="splash12"><img src="../../img/splash/splash12.png">' +
            'The following 4 new checklists have been released and ' +
            'can now be found on the Vital Interventions page' +
            '<ul>' +
            '<li>Critical Care Management – Adult</li>' +
            '<li>Critical Care Management – Neonatal</li>' +
            '<li>Critical Care Management – Pediatric</li>' +
            '<li>Hepatectomy</li>' +
            '</ul>' +
            '</div></div>'
        },
        {
            id: 11,
            title: '',
            subtitle: 'New checklists released (September 17, 2015)',
            imgClass: 'splash11',
            learnMoreMsg: '<div class="paragraphs"><p>' +
            'The following 10 new checklists have been released and can ' +
            'now be found on the Vital Interventions page:' +
            '<ul>' +
            '<li>Acute Renal Failure</li>' +
            '<li>Brain Injury</li>' +
            '<li>Cardiac Surgery – Pediatric</li>' +
            '<li>Diabetes Mellitus – Gestational</li>' +
            '<li>Esophagectomy</li>' +
            '<li>Gastrectomy</li>' +
            '<li>Line Insertion – Central Venous</li>' +
            '<li>Neutropenic Fever – Pediatric</li>' +
            '<li>Palliative Care</li>' +
            '<li>Preeclampsia/Gestational Hypertension</li>' +
            '</ul>' +
            '</p></div>',
            icon: '../../img/splash/splash11.png',
            intro: 'We are pleased to announce the release of 10 new checklists. ' +
            'These include medical, surgical, procedural, pediatric, obstetric,' +
            ' and palliative care topics.',
            desc: '<div class="paragraphs"><p><img class="splash11" src="../../img/splash/splash11.png">' +
            'The following 10 new checklists have been released and can ' +
            'now be found on the Vital Interventions page:' +
            '<ul>' +
            '<li>Acute Renal Failure</li>' +
            '<li>Brain Injury</li>' +
            '<li>Cardiac Surgery – Pediatric</li>' +
            '<li>Diabetes Mellitus – Gestational</li>' +
            '<li>Esophagectomy</li>' +
            '<li>Gastrectomy</li>' +
            '<li>Line Insertion – Central Venous</li>' +
            '<li>Neutropenic Fever – Pediatric</li>' +
            '<li>Palliative Care</li>' +
            '<li>Preeclampsia/Gestational Hypertension</li>' +
            '</ul>' +
            '</p></div>'
        },
        {
            id: 10,
            title: '',
            subtitle: '"Not Applicable" now "Not Scored" (July 21, 2015)',
            imgClass: 'splash7',
            icon: '../../img/splash/splash7.png',
            intro: 'Due to client feedback on the ambiguity of the "Not Applicable" terminology,' +
            ' we have changed that text to "Not Scored". Now when you look at the colored bar in the' +
            ' upper left corner of each assessment, you will see that the gray bar corresponds to those' +
            ' items that are "Not Scored". Similar wording changes have been made throughout the application.',
            desc: '<div class="paragraphs"><p><img class="splash7" src="../../img/splash/splash7.png">' +
            'Due to client feedback on the ambiguity of the "Not Applicable" terminology,' +
            ' we have changed that text to "Not Scored." Now when you look at the colored bar' +
            ' in the upper left corner of each assessment, you will see that the gray bar corresponds' +
            ' to those items that are "Not Scored." Similar wording changes have been made throughout the' +
            ' application.</p></div>'
        },
        {
            id: 7,
            title: '',
            subtitle: 'New checklists released (July 14, 2015)',
            imgClass: 'splash5',
            learnMoreMsg: "<div class='paragraphs'><p>Two new checklists have been released and can now be found on the Vital Interventions page:<ul><li>Sepsis – Neonatal</li><li>Urinary Tract Infection – Adult</li></ul></p></div>",
            icon: '../../img/splash/splash5.png',
            intro: "We are pleased to announce that 2 new infectious disease checklists have been released.",
            desc: "<div class='paragraphs'><p><img class='splash5' src='../../img/splash/splash5.png'>" +
            " Two new checklists have been released and can now be found on the Vital Interventions " +
            "page:<ul><li>Sepsis – Neonatal</li><li>Urinary Tract Infection – Adult</li></ul>" +
            "</p></div>"
        },
        {
            id: 6,
            title: '',
            subtitle: 'Risk icon added to assessments (June 25, 2015)',
            imgClass: 'splash6',
            learnMoreMsg: "<div class='paragraphs'><p>For select checklists, a <strong>Risk</strong> icon will now appear in your assessments (previously this icon was displayed only in the Vital Interventions checklists). This icon, which will appear in the gold key section of the evidence panel, indicates that the particular intervention is associated with a risk of the outcome occurring. Sometimes you may see an <strong>Avoid</strong> intervention, warning you against performing a certain intervention. In other cases, however, there may be mixed outcomes (some positive, some negative) or a guideline may recommend an intervention that we have identified as potentially being associated with a negative outcome. When available, you will see an NNH (number needed to harm) associated with a given risk outcome.</p></div>",
            icon: '../../img/splash/splash6-2.png',
            intro: "For select checklists, a <strong>Risk</strong> icon will now appear in your assessments. This icon indicates that the particular intervention is associated with a risk of the outcome occurring. Previously this icon only appeared in the Vital Interventions checklists.",
            desc: "<div class='paragraphs'><p><img class='splash6' src='../../img/splash/splash6-2.png'>For select checklists, a <strong>Risk</strong> icon will now appear in your assessments (previously this icon was displayed only in the Vital Interventions checklists). This icon, which will appear in the gold key section of the evidence panel, indicates that the particular intervention is associated with a risk of the outcome occurring. Sometimes you may see an <strong>Avoid</strong> intervention, warning you against performing a certain intervention. In other cases, however, there may be mixed outcomes (some positive, some negative) or a guideline may recommend an intervention that we have identified as potentially being associated with a negative outcome. When available, you will see an NNH (number needed to harm) associated with a given risk outcome.</p></div>"
        },
        {
            id: 5,
            title: '',
            subtitle: 'New checklists released (June 18, 2015)',
            imgClass: 'splash5',
            learnMoreMsg: "<div class='paragraphs'><p>Eight new checklists have been released and can now be found on the Vital Interventions page:<ul><li>Cesarean Delivery</li><li>Chest Pain – Low Risk</li><li>Delirium</li><li>DKA/HHS – Adult</li><li>Neutropenic Fever – Adult</li><li>Pneumonia – CAP, Pediatric</li><li>Pneumonia – Nosocomial</li><li>Vaginal Delivery</li></ul>" +
            "</p></div>",
            icon: '../../img/splash/splash5.png',
            intro: 'We are pleased to announce that 8 new checklists have been released. These include obstetric, cardiac, psychiatric, endocrine, and infectious disease topics.',
            desc: "<div class='paragraphs'><p><img class='splash5' src='../../img/splash/splash5.png'> Eight new checklists have been released and can now be found on the Vital Interventions page:<ul><li>Cesarean Delivery</li><li>Chest Pain – Low Risk</li><li>Delirium</li><li>DKA/HHS – Adult</li><li>Neutropenic Fever – Adult</li><li>Pneumonia – CAP, Pediatric</li><li>Pneumonia – Nosocomial</li><li>Vaginal Delivery</li></ul></p></div>"
        },
        {
            id: 1,
            title: '',
            subtitle: 'See what’s new or coming soon (May 29, 2015)',
            imgClass: 'splash3',
            intro: 'With News Feed, you will be able to see a customized view of announcements that are new to you since the last time you logged in. This will ensure that you don’t miss any important news. You will still have access to all prior announcements. See the <a href="../../documents/splash-pdf/Release_Notes_News_Feed.pdf" target="_blank">release notes</a> for more information.',
            desc: "<div class='paragraphs'><p><img class='splash3' src='../../img/splash/splash3.png'> With News Feed, you will be able to see a customized view of announcements that are new to you since the last time you logged in. This will ensure that you don’t miss any important news. You will still have access to all prior announcements. See the <a href='../../documents/splash-pdf/Release_Notes_News_Feed.pdf' target='_blank'>release notes</a> for more information.</p></div>"
        },
        {
            id: 2,
            title: '',
            subtitle: 'Reset and change your own password (May 29, 2015)',
            imgClass: 'splash2',
            intro: 'With Password Management, you will be able to reset and change your password without needing to contact Zynx Support. You will also be able to make changes to your display name. See the <a href="../../documents/splash-pdf/Release_Notes_PW_Mgmt.pdf" target="_blank">release notes</a> for more information.',
            desc: "<div class='paragraphs'><p><img class='splash2' src='../../img/splash/splash2.png'>With Password Management, you will be able to reset and change your password without needing to contact Zynx Support. You will also be able to make changes to your display name. See the <a href='../../documents/splash-pdf/Release_Notes_PW_Mgmt.pdf' target='_blank'>release notes</a> for more information.</p></div>"
        },
        {
            id: 3,
            title: '',
            subtitle: 'Use tags to organize your documents (May 29, 2015)',
            imgClass: 'splash1',
            intro: 'With Document Management, you will now be able to tag content, making it easier to organize and find your documents and assessments. Because you can assign multiple tags to a single piece of content, tagging provides a flexible way for you to manage your content. See the <a href="../../documents/splash-pdf/Release_Notes_Doc_Mgmt.pdf" target="_blank">release notes</a> for more information.',
            desc: "<div class='paragraphs'><p><img class='splash1' src='../../img/splash/splash1.png'>With Document Management, you will now be able to tag content, making it easier to organize and find your documents and assessments. Because you can assign multiple tags to a single piece of content, tagging provides a flexible way for you to manage your content. See the <a href='../../documents/splash-pdf/Release_Notes_Doc_Mgmt.pdf' target='_blank'>release notes</a> for more information.</p></div>"
        },
        {
            id: 4,
            title: '',
            subtitle: 'On-demand video training (May 29, 2015)',
            imgClass: 'splash4-1',
            intro: 'With Tutorial Library, you can access video or PDF educational materials that are broken out into different modules for quick and easy learning. See the <a href="../../documents/splash-pdf/Release_Notes_Tutorial_Library.pdf" target="_blank">release notes</a> for more information.',
            desc: "<div class='paragraphs'><p><img class='splash4-2' src='../../img/splash/splash4-2.png'>With Tutorial Library, you can access video or PDF educational materials that are broken out into different modules for quick and easy learning. See the <a href='../../documents/splash-pdf/Release_Notes_Tutorial_Library.pdf' target='_blank'>release notes</a> for more information.</p></div>"
        }
    ];

}(this, window.resources = window.resources || {}));
